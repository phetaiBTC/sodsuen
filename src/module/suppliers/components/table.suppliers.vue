<template>
    <modalCategory :visible="visible" @update:visible="visible = $event" type="edit"></modalCategory>
    <a-table :columns="SupplierColumns" :data-source="supplierList" :loading="loading" :scroll="{ x: 1500, y: 282 }"
        :pagination="{ pageSize: 5 }">
        <template #bodyCell="{ column, record, index }">
            <template v-if="column.key === 'no'">
                <span>{{ index + 1 }}</span>
            </template>
            <template v-if="column.key === 'is_active'">
                <a-switch :checked="record.is_active" @change="ChangeActiveSupplier(record.id)" />
            </template>
            <template v-if="column.key === 'operation'">
                <div class="w-full flex justify-around">
                    <a-button type="primary" @click="onEdit(record)">{{ $t('edit') }}</a-button>
                    <a-popover :open="openPopover === record.id" :title="$t('delete') + ' ?'" trigger="click">
                        <template #content>
                            <a @click="openPopover = null">{{ $t('close') }}</a>
                            <a @click="onDelete(record.id)" style="margin-left: 10px; color: red;">{{ $t('confirm')
                                }}</a>
                        </template>
                        <a-button type="primary" danger ghost @click="openPopover = record.id">
                            {{ $t('delete') }}
                        </a-button>
                    </a-popover>
                </div>
            </template>
        </template>
    </a-table>
</template>
<script lang="ts" setup>
import { SupplierColumns, type SupplierItem } from '../entity/index'
import { ref, onMounted } from 'vue';
import { getSupplier, deleteSupplier, getAllSuppliers, ChangeActiveSupplier } from '../composables';
import modalCategory from './modal.suppliers.vue';
import { storeSuppliers } from '../store/index';
import { storeToRefs } from 'pinia';

const visible = ref<boolean>(false);
const { supplierList, loading } = storeToRefs(storeSuppliers());
const openPopover = ref<number | null>(null);

const onEdit = async (record: SupplierItem) => {
    if (record.id === undefined) return;
    await getSupplier(record.id);
    visible.value = true;
};

const onDelete = async (id: number) => {
    await deleteSupplier(id);
};

onMounted(async () => {
    await getAllSuppliers();
    console.log(supplierList.value);
});

</script>
