import type { RouteRecordRaw } from 'vue-router'
import login from '../pages/login.vue'
export const authRouter: RouteRecordRaw[] = [
    {
        path: "/login",
        name: "login",
        component: login
    }
]