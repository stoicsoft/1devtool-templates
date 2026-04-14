import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const appHosts = new Set(["localhost", "127.0.0.1", "their_project.com", "www.their_project.com"])

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host")?.split(":")[0] ?? ""
  const url = request.nextUrl

  if (hostname.startsWith("www.") && !hostname.endsWith("their_project.com")) {
    const redirectUrl = url.clone()
    redirectUrl.hostname = hostname.replace(/^www\./, "")
    redirectUrl.protocol = "https"
    return NextResponse.redirect(redirectUrl, 308)
  }

  if (appHosts.has(hostname) || hostname.endsWith(".vercel.app")) {
    return NextResponse.next()
  }

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-custom-domain", hostname)

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
