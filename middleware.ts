import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// By default, clerkMiddleware will not protect any routes. All routes are public and you must opt-in to protection for routes.
// Add the routes you'd like to protect to the following array:
const isProtectedRoute = createRouteMatcher([
  '/profile(.*)',
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};