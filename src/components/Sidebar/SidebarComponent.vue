<template>
    <a-layout-sider v-model:collapsed="collapsed" collapsible></a-layout-sider>
    <a-layout-sider v-model:collapsed="collapsed" collapsible class="bgc0 hide-scrollbar"
        :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }">
        <div class="logo">
            <div :style="collapsed ? 'margin:5px' : 'margin:20px 20px 0 20px'">
                <img src="/logo.jpeg" alt="" class=" rounded-full">
                <p v-show="!collapsed" class="text-xl text-center" style="color: #FCEFCB;margin: 5px 0 !important;">
                    ຮ້ານຄ້າຈຳລອງ</p>
            </div>
        </div>
        <a-menu v-model:selectedKeys="selectedKeys" mode="inline" class="bgc0" theme="dark">
            <template v-for="item in menuSidebar" :key="item.label">
                <a-sub-menu v-if="item.children" :key="`if-${item.label}`">
                    <template #title>
                        <span>
                            <component :is="item.icon" />
                            <span>{{ $t(item.label) }}</span>
                        </span>
                    </template>
                    <a-menu-item v-for="child in item.children" :key="child.label">
                        <router-link :to="{ name: child.route}">
                            {{ $t(child.label) }}
                        </router-link>

                    </a-menu-item>
                </a-sub-menu>
                <a-menu-item v-else :key="`else-${item.label}`">
                    <router-link :to="{ name: item.route}">
                        <component :is="item.icon" />
                        <span>{{ $t(item.label) }}</span>
                    </router-link>
                </a-menu-item>
            </template>
        </a-menu>
    </a-layout-sider>
</template>

<script setup lang="ts">
import { menuSidebar } from './index';
import { ref } from 'vue';
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['1']);
</script>
<style scoped>
#components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3) !important;
}
</style>