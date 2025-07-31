// Shared NextAuth options for use in both API route and server utilities.
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@lib/mongodb"; // MongoDB connection
import { verifyPassword } from "@lib/auth";
import { User } from "@models/User.model";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
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
          const user = await db.collection("users").findOne({ email: credentials.email }) as User;

          if (!user) {
            console.error("User not found:", credentials.email);
            throw new Error("Invalid email or password");
          }

          // Проверяем пароль с помощью bcrypt
          const isPasswordValid = await verifyPassword(credentials.password, user.password);
          
          if (!isPasswordValid) {
            console.error("Invalid password for user:", credentials.email);
            throw new Error("Invalid email or password");
          }

          console.log("User authenticated successfully:", user.email);

          return {
            id: user._id?.toString() || "",
            email: user.email,
            name: user.name,
            isBusiness: user.isBusiness || false,
            business: user.business || null,
            location: user.location || null,
            createdAt: user.createdAt,
          };
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
          isBusiness: user.isBusiness,
          business: user.business,
          location: user.location,
          createdAt: user.createdAt,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user; // Pass user data to session
      return session;
    },
  },
  pages: {
    signIn: '/login', // Кастомная страница входа
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 дней
  },
  secret: process.env.NEXTAUTH_SECRET, // Use environment variable for the secret
}; 