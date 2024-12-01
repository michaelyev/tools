import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req, secret: "ТУТ_СЕКРЕТ" });

  const { pathname } = req.nextUrl;

  // Restrict vendor routes
  if (pathname.startsWith("/vendor") && (!token || token.user.role !== "vendor")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Restrict buyer routes
  const buyerRoutes = [
    "/orders",
    "/wish-list",
    "/support-tickets",
    "/profile",
    "/address",
    "/payment-methods",
  ];
  if (buyerRoutes.some((route) => pathname.startsWith(route)) && (!token || token.user.role !== "buyer")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/vendor/:path*", "/orders/:path*", "/wish-list", "/support-tickets/:path*", "/profile/:path*", "/address/:path*", "/payment-methods/:path*"],
};
