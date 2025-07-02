


import { defineStore } from "pinia";
import type { SupplierItem } from "../entity";
import { ref } from "vue";


export const storeSuppliers = defineStore('suppliers', () => {
    const loading = ref<boolean>(false);
    const supplierList = ref<SupplierItem[]>([]);
    const supplier = ref<SupplierItem>({
        id: 0,
        name: '',
        description: '',
        createdAt: '',
        updatedAt: ''
    });
    return {
        supplierList,
        loading,
        supplier
    };
})
