import type { RouteRecordRaw } from 'vue-router'
import UserIndex from '../pages/index.vue'
export const userRouter: RouteRecordRaw[] = [
    {
        path: "/user",
        name: "user.index",
        component: UserIndex
    }
]