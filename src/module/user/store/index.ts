// useProvince.ts
import { defineStore } from "pinia";
import { ref } from "vue";
import api from "@/plugins/axios";
import { errorM } from "@/util/message.util";
import type { UserItem } from "../entity";


export const useUser = defineStore('user', () => {

    const loading = ref<boolean>(false);

    const usersList = ref<UserItem[]>([]);

    const getAllUsers = async () => {
        loading.value = true;
        api.get('/users').then((res) => {
            usersList.value = res.data;
            loading.value = false;
        }).catch((err) => {
            loading.value = false;
            errorM(err.response.data.message);
            console.log(err);
        });
    }

    return {
        usersList,
        getAllUsers
    };
});
