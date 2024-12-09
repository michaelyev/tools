// utils/getUserSession.ts

import { getServerSession } from "next-auth";
import { authOptions } from "app/api/auth/[...nextauth]/route"; // Update this path based on your project structure

export async function getUserSession() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return null; // Return null if no session exists
  }

  const user = {
    email: session.user?.email || null,
    name: session.user?.name || null,
    image: session.user?.image || null,
  };

  

  return user; // Return only necessary user data
}
