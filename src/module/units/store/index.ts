// useProvince.ts
import { defineStore } from "pinia";
import { ref } from "vue";
import type { UnitItem } from "../entity";

export const storeUnit = defineStore('unit', () => {
    const loading = ref<boolean>(false);
    const unitList = ref<UnitItem[]>([]);
    const unit = ref<UnitItem>({
        id: 0,
        name: '',
        symbol: '',
        description: '',
        createdAt: '',
        updatedAt: ''
    });
    return {
        unitList,
        loading,
        unit
    };
});
