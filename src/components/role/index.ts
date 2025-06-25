// useProvince.ts
import { defineStore } from "pinia";
import { ref } from "vue";
import api from "@/plugins/axios";

type Role = { id: number; name: string };

export const useRole = defineStore('role', () => {
    const roleList = ref<Role[]>([]);

    const getRole = async () => {
        const res = await api.get(`roles`);
        roleList.value = res.data;
    };
    return {
        roleList,
        getRole
    };
});
