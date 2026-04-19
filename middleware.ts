import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'id']
const defaultLocale = 'en'

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language')
  if (!acceptLanguage) return defaultLocale

  if (acceptLanguage.includes('id')) return 'id'
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip static files and images
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/images/') ||
    pathname.includes('/videos/') ||
    pathname.includes('/favicon.ico') ||
    pathname.includes('/logo.png')
  ) {
    return
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // e.g. incoming is /products
    // The new URL is now /en/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
