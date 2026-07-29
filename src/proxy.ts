import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * URL normalization to prevent duplicate-content variants of the same page:
 * - forces lowercase paths (case-variant URLs would otherwise serve as
 *   separate, uncanonicalized pages)
 * - redirects http -> https and bare host -> www (defensive; most hosts
 *   already do this at the platform/CDN level)
 * Does not touch the response body — no visual/behavioral change for a
 * request that's already normalized.
 */
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") || "";
  const proto = request.headers.get("x-forwarded-proto");
  const isLocalHost = host.startsWith("localhost") || host.startsWith("127.0.0.1");

  let needsRedirect = false;

  const lowerPath = url.pathname.toLowerCase();
  if (url.pathname !== lowerPath) {
    url.pathname = lowerPath;
    needsRedirect = true;
  }

  // Only enforce https/www on the real production host — localhost/dev
  // connections report their own proto/host here and must never redirect.
  if (!isLocalHost) {
    if (proto === "http") {
      url.protocol = "https:";
      needsRedirect = true;
    }

    if (host === "limetreehotels.com") {
      url.host = "www.limetreehotels.com";
      needsRedirect = true;
    }
  }

  if (needsRedirect) {
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Skip static assets, images, and Next internals — only normalize
     * actual page/route requests.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp|avif|gif|ico|css|js|woff|woff2)$).*)",
  ],
};
