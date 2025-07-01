<template>
  <modalCategory :visible="visible" @update:visible="visible = $event" type="edit"></modalCategory>
  <a-table :columns="CategoriesColumns" :data-source="categoryList" :loading="loading" :pagination="{ pageSize: 5 }">
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
import { CategoriesColumns, type CategoryItem } from '../entity'
import { ref, onMounted } from 'vue';
import { getAllCategories, deleteCategory, getCategory } from '../composables';
import modalCategory from './modal.category.vue';
import { storeCategory } from '../store';
import { storeToRefs } from 'pinia';

const visible = ref<boolean>(false);
const { categoryList, loading } = storeToRefs(storeCategory());
const openPopover = ref<number | null>(null);

const onEdit = async (record: CategoryItem) => {
  await getCategory(record.id);
  visible.value = true;
};

const onDelete = async (id: number) => {
  await deleteCategory(id);
};

onMounted(async () => {
  await getAllCategories();
});

</script>
