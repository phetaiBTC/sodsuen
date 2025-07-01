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
                    {{ $t('add') + $t('category') }}
                </a-button>
            </a-col>
        </a-row>
        <tableCategory></tableCategory>
        <modalCategory :visible="visible" @update:visible="visible = $event" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import tableCategory from '../components/table.category.vue';
import modalCategory from '../components/modal.category.vue';
import { searchCategories } from '../composables/index';
const value = ref<string>('');
const visible = ref<boolean>(false);
const onSearch = async (searchValue: string) => {
    await searchCategories(searchValue);
};
</script>

<style scoped></style>