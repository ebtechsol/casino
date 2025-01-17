import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from '@/lib/authenticationSession'
import { cookies } from 'next/headers'
 
// 1. Specify protected and public routes
const protectedRoutes = ['/Profile']
const publicRoutes = ['/SignIn', '/SignUp', '/']
const authRoutes = ['/SignIn', '/SignUp']
 
export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);
  const isAuthRoute = authRoutes.includes(path);
 
  // 3. Decrypt the session from the cookie
  const cookie = (await cookies()).get('AUTHENTICATION_SESSION')?.value
  const session = await decrypt(cookie)
 
  // 4. Redirect to /SignIn if the user is not authenticated

  if(isAuthRoute && session?.userDetail)
  {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }

  if (isProtectedRoute && !session?.userDetail) {
    return NextResponse.redirect(new URL('/SignIn', req.nextUrl))
  }
 
  // 5. Redirect to / if the user is authenticated
  if (
    isPublicRoute &&
    session?.userDetail &&
    !req.nextUrl.pathname.startsWith('/')
  ) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }
 
  return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}