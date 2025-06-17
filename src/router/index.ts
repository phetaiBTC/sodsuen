import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import { authRouter } from "@/module/auth/router";
const routes = [
    { path: "/", component: HelloWorld },
    ...authRouter
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})