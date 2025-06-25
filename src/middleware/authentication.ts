
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { isTokenExpired } from '@/util/jwt';
export function authMiddleware(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const token = localStorage.getItem('token');

  if (to.meta.requiresAuth && (!token || isTokenExpired(token))) {
    return next({ name: 'login' });
  }

  return next(); // ✅ เพิ่ม return ตรงนี้ ป้องกัน next() ถูกเรียกซ้ำ
}


