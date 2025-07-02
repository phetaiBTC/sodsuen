import { createRouter, createWebHistory } from "vue-router";
import Indexpage from "../components/HelloWorld.vue";
import { authRouter } from "@/module/auth/router";
import defaultLayout from "@/layouts/default.layout.vue";
import { userRouter } from "@/module/user/router";
import { authMiddleware } from "@/middleware/authentication";
import { unitsRouter } from "@/module/units/router";
import { categoriesRouter } from "@/module/categories/router";
import { suppliersRouter } from "@/module/suppliers/router";

const routes = [
    {
        path: "/",
        component: defaultLayout,
        children: [
            { path: "/", name: "home", component: Indexpage },
            ...userRouter,
            ...unitsRouter,
            ...categoriesRouter,
            ...suppliersRouter
        ],
        meta: { requiresAuth: true }
    },
    ...authRouter
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(authMiddleware);