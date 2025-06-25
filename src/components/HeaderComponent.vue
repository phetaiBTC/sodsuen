<template>
    <a-layout-header style="padding: 0">
        <div class="w-full h-full flex justify-between items-center px-5 bgc4">
            <div class="flex items-center gap-2">
                <!-- <img src="/logo.jpeg" alt="" width="40" class="rounded-full" style="border: 1px solid #A86523;"> -->
                <span class="text-xl">Admin</span>
            </div>
            <div>
                <a-button type="primary" @click="logout">Logout</a-button>
            </div>
        </div>
    </a-layout-header>
</template>

<script setup lang="ts">
import { router } from '@/router';
import { successM } from '@/util/message.util';

const logout = async () => {
    await localStorage.removeItem('token')
    await successM('Logout Success')
    await router.push({ name: 'login' })
}
</script>

<style scoped></style>