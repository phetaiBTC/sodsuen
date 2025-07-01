<template>
  <modalUnit :visible="visible" @update:visible="visible = $event" type="edit"></modalUnit>
  <a-table :columns="UnitColumns" :data-source="unitList" :loading="loading" :pagination="{ pageSize: 5 }">
    <template #bodyCell="{ column, record, index }">
      <template v-if="column.key === 'no'">
        <span>{{ index + 1 }}</span>
      </template>
      <template v-if="column.key === 'operation'">
        <div class="w-full flex justify-around">
          <a-button type="primary" @click="onEdit(record)">{{ $t('edit') }}</a-button>
          <a-popover :open="openPopover === record.id" :title="$t('delete') + ' ?'" trigger="click">
            <template #content>
              <a @click="openPopover = null">{{ $t('close') }}</a>
              <a @click="onDelete(record.id)" style="margin-left: 10px; color: red;">{{ $t('confirm') }}</a>
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
import { UnitColumns, type UnitItem } from '../entity'
import { ref, onMounted } from 'vue';
import { getAllUnits, deleteUnit, getUnit } from '../composables';
import modalUnit from './modal.unit.vue';
import { storeUnit } from '../store';
import { storeToRefs } from 'pinia';

const visible = ref<boolean>(false);
const { unitList, loading } = storeToRefs(storeUnit());
const openPopover = ref<number | null>(null);

const onEdit = async (record: UnitItem) => {
  await getUnit(record.id);
  visible.value = true;
};

const onDelete = async (id: number) => {
  await deleteUnit(id);
};

onMounted(async () => {
  await getAllUnits();
});

</script>
