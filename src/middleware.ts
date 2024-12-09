import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // If no token is present, redirect unauthenticated users to the login page
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next(); // Allow access to all routes if authenticated
}

export const config = {
  matcher: [
    "/vendor/:path*",
    "/orders/:path*",
    "/wish-list",
    "/support-tickets/:path*",
    "/profile/:path*",
    "/address/:path*",
    "/payment-methods/:path*",
  ],
};
