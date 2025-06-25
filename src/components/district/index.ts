// useProvince.ts
import { defineStore } from "pinia";
import { ref } from "vue";
import api from "@/plugins/axios";

type District = { id: number; name: string; name_en: string };

export const useDistrict = defineStore('district', () => {
    const districtList = ref<District[]>([]);

    const getDistrictList = async () => {
        const res = await api.get(`district`);
        districtList.value = res.data;
        // console.log(districtList.value);
    };

    const getByIdDistrictList = async (id: number) => {
        const res = await api.get(`district/${id}`);
        districtList.value = res.data;
    };

    return {
        districtList,
        getDistrictList,
        getByIdDistrictList
    };
});
