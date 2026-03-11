import { NextRequest, NextResponse } from "next/server";

const publicPaths = ["/login"];
const isPublicPath = (pathname: string) =>
  publicPaths.some((path) => pathname.startsWith(path));

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  console.log("token", token);

  const pathname = request.nextUrl.pathname;

  if (isPublicPath(pathname)) {
    if (token && pathname === "/login") {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (!token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname + request.nextUrl.search);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/public).*)"],
};
