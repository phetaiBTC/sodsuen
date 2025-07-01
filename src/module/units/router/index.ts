import type { RouteRecordRaw } from "vue-router";
import unitsIndex from "@/module/units/pages/index.vue"
export const unitsRouter: RouteRecordRaw[] = [
    {
        path: "/units",
        name: "units.index",
        component: unitsIndex
    }
]