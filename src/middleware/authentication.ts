
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { isTokenExpired } from '@/util/jwt';
export function authMiddleware(
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const token = localStorage.getItem('token');
  if (to.name === 'login' && token) {
    return next({ name: 'home' });
  }
  if (to.meta.requiresAuth && (!token || isTokenExpired(token))) {
    return next({ name: 'login' });
  }

  return next();
}


