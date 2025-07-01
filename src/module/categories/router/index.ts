import type { RouteRecordRaw } from "vue-router";
import categoriesIndex from "../pages/index.vue"
export const categoriesRouter: RouteRecordRaw[] = [
    {
        path: "/categories",
        name: "categories.index",
        component: categoriesIndex
    }
]