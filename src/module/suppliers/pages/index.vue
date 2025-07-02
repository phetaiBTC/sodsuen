<template>
    <div>
        <a-row :gutter="[16, 16]" align="middle" style="margin-bottom: 10px;">
            <a-col :sm="24" :lg="10">
                <a-input-search v-model:value="value" placeholder="..." :enter-button="$t('search')" size="large"
                    @search="onSearch">
                    <template #prefix>
                        <SearchOutlined style="margin-right: 5px;" />
                    </template>
                </a-input-search>
            </a-col>
            <a-col :sm="24" :lg="4">
                <a-button type="primary" size="large" @click="visible = true">
                    {{ $t('add') + $t('unit') }}
                </a-button>
            </a-col>
        </a-row>
        <tableSuppliers></tableSuppliers>
        <modalSuppliers :visible="visible" @update:visible="visible = $event" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import tableSuppliers from '../components/table.suppliers.vue';
import modalSuppliers from '../components/modal.suppliers.vue';
// import { search } from '../composables';
const value = ref<string>('');
const visible = ref<boolean>(false);
const onSearch = (searchValue: string) => {
    // search(searchValue);
};
</script>

<style scoped></style>