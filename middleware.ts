import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/filmy/:path*", "/foto/:path*", "/video/:path*", "/grafika/:path*", "/kontakt/:path*"],
};
