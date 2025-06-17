// src/plugins/i18n.ts
import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import th from '@/locales/th.json'

export const i18n = createI18n({
  legacy: false,
  locale: 'en', // default
  fallbackLocale: 'en',
  messages: {
    en,
    th
  }
})
