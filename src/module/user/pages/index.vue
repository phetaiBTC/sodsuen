<template>
    <div>
        <a-row :gutter="[16, 16]" align="middle" style="margin-bottom: 10px;">
            <a-col :sm="24" :lg="10">
                <a-input-search v-model:value="value" :placeholder="$t('inputSearchPlaceholder')"
                    :enter-button="$t('search')" size="large" @search="onSearch" />
            </a-col>
            <a-col :sm="24" :lg="3">
                <a-button type="primary" size="large" block @click="visible = true">
                    {{ $t('add') + $t('user') }}
                </a-button>
            </a-col>
        </a-row>
        <modal-add v-model:visible="visible" />
        <table-user />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import tableUser from '../components/table.user.vue';
import modalAdd from '../components/modal.add.vue';
const value = ref<string>('');
const visible = ref<boolean>(false);
const onSearch = (searchValue: string) => {
    alert(searchValue);
    console.log('use value', searchValue);
    console.log('or use this.value', value.value);
};
</script>

<style scoped></style>