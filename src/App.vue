<template>
  <ConfigProvider :theme="theme">
    <router-view></router-view>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue';
import { ref } from 'vue';

const theme = ref({
  token: {
    colorPrimary: '#A86523', // สีหลัก
    borderRadius: 6,         // มุมโค้ง
    colorBgContainer: '#FFF', // สีพื้นหลัง
    colorText: '#131010',      // สีข้อความ
    colorLink: '#A86523',       // สีลิงค์
    colorLinkHover: '#131010',
    // colorLinkActive: '#131010',
    // colorLinkVisited: '#131010',
    // colorBgTextHover: '#131010',
    // colorBgTextActive: '#131010',
    // colorBgTextVisited: '#131010',

  },
});
</script>

<style scoped></style>