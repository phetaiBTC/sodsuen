// src/plugins/axios.ts
import { Bi18n } from '@/util/Bi18n';
import { errorM } from '@/util/message.util';
import axios from 'axios'
const baseURL = import.meta.env.VITE_BEAS_URL; // ✅ แก้ชื่อให้ถูกต้อง

console.log(baseURL)
const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 403) {
      errorM(Bi18n('unauthorized'));
      console.warn('Unauthorized')
    }
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      errorM(Bi18n('unauthorized'));
      console.warn('Unauthorized')
    }
    return Promise.reject(error)
  }
)

export default api
