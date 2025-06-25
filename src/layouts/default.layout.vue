<template>
    <a-layout style="min-height: 100vh">
        <SidebarComponent/>
        <a-layout class="bgc3">
            <HeaderComponent/>
            <a-layout-content style="margin: 0 16px" class="flex py-[16px]">
                <div :style="{ padding: '20px', minHeight: '90%', width: '100%' }" class="bgc4 rounded-xl">
                    <router-view></router-view>
                </div>
            </a-layout-content>
            <FooterComponent/>
        </a-layout>
    </a-layout>
</template>
<script lang="ts" setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import SidebarComponent from '@/components/Sidebar/SidebarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>
<style scoped>
.site-layout .site-layout-background {
    background: #fff;
}
</style>
