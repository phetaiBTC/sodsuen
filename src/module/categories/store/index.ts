import { defineStore } from "pinia";
import type { CategoryItem } from "../entity";
import { ref } from "vue";


export const storeCategory = defineStore('category', () => {
    const loading = ref<boolean>(false);
    const categoryList = ref<CategoryItem[]>([]);
    const category = ref<CategoryItem>({
        id: 0,
        name: '',
        description: '',
        createdAt: '',
        updatedAt: ''
    });
    return {
        categoryList,
        loading,
        category
    };
})
