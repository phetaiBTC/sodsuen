import type { RouteRecordRaw } from "vue-router";
import suppliersIndex from "../pages/index.vue"
export const suppliersRouter: RouteRecordRaw[] = [
    {
        path: "/suppliers",
        name: "suppliers.index",
        component: suppliersIndex
    }
]