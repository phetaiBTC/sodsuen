import { createApp } from 'vue'
import '@/assets/css/style.css'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
import {router} from './router'
import { i18n } from '@/plugins/i18n';
import { createPinia } from 'pinia';
import { SearchOutlined } from '@ant-design/icons-vue';

const app = createApp(App)
app.component('SearchOutlined', SearchOutlined)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(Antd)
app.mount('#app')
