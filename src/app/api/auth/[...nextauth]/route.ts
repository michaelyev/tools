import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@lib/mongodb"; // MongoDB connection

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Connect to MongoDB
          const client = await clientPromise;
          const db = client.db("rent-tool");

          console.log("Connected to MongoDB successfully");

          // Find the user by email
          const user = await db.collection("users").findOne({ email: credentials.email });

          // Check if user exists and password matches
          if (user && user.password === credentials.password) {
            console.log("User found:", user);

            return {
              id: user._id.toString(),
              email: user.email,
              name: user.name,
            };
          }

          console.error("Invalid email or password");
          throw new Error("Invalid email or password");
        } catch (error) {
          console.error("Error during authentication:", error.message);
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user; // Pass user data to session
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Use environment variable for the secret
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
