// src/plugins/i18n.ts
import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import la from '@/locales/la.json'

export const i18n = createI18n({
  legacy: false,
  locale: 'la', // default
  fallbackLocale: 'en',
  messages: {
    en,
    la
  }
})
