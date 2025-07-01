import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import { authRouter } from "@/module/auth/router";
import defaultLayout from "@/layouts/default.layout.vue";
import { userRouter } from "@/module/user/router";
import { authMiddleware } from "@/middleware/authentication";
import { unitsRouter } from "@/module/units/router";
import { categoriesRouter } from "@/module/categories/router";
const routes = [
    {
        path: "/",
        component: defaultLayout,
        children: [
            { path: "/", name: "home", component: HelloWorld },
            ...userRouter,
            ...unitsRouter,
            ...categoriesRouter
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