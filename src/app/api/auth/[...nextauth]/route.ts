import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import users from "@lib/mockedUsers"; // Assuming mockedUsers contains your user data

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Mocked user verification logic
        const user = users.find(
          (user) =>
            user.email === credentials?.email &&
            user.password === credentials?.password
        );

        // Return user if found, else return null
        if (user) return user;
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = token.user; // Include user in session
      return session;
    },
    async jwt({ token, user }) {
      if (user) token.user = user; // Store user in token
      return token;
    },
  },
  secret: "ТУТ_СЕКРЕТ", // Replace with a random secure string
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
