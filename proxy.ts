import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Ported from the bad-bot block in nginx.conf (actually Apache .htaccess syntax):
// RewriteCond %{HTTP_USER_AGENT} (ahrefs|semrush|majestic|petalbot) [NC]
// RewriteRule .* - [F,L]
const BAD_BOT_PATTERN = /(ahrefs|semrush|majestic|petalbot)/i;

export function proxy(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") ?? "";

  if (BAD_BOT_PATTERN.test(userAgent)) {
    return new NextResponse(null, { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - common static file extensions
     */
    "/((?!_next/static|_next/image|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|woff|woff2|ttf|txt|xml|json)$).*)",
  ],
};
