import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// inspiré par:
// https://github.com/tumetus/next-js-middleware-role-auth-example/blob/main/middleware.js

//Le code pour bloquer l'accès aux pages d'administration pour nous non autorisés

export default withAuth(
  function middleware(req) {
    if (
      ((req.nextUrl.pathname === "/admin") ||
        (req.nextUrl.pathname === "/admin/rentals") ||
        (req.nextUrl.pathname === "/admin/users")) &&
      req.nextauth.token?.role !== "ADMIN"
    ) {
      return new NextResponse("Vous n'êtes pas autorisé!");
    }
  },
  {
    callbacks: {
      authorized: (params) => {
        let { token } = params;
        return !!token;
      },
    },
  }
);

export const config = { matcher: ["/admin", "/admin/rentals", "/admin/users"] };
