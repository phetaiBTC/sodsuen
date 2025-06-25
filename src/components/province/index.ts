// useProvince.ts
import { defineStore } from "pinia";
import { ref } from "vue";
import api from "@/plugins/axios";

type Province = { id: number; name: string; name_en: string };

export const useProvince = defineStore('province', () => {
  const provinceList = ref<Province[]>([]); // ✅ กำหนด type อย่างชัดเจน

  const getProvinceList = async () => {
    const res = await api.get('province');
    provinceList.value = res.data;
  };

  return {
    provinceList,
    getProvinceList,
  };
});
