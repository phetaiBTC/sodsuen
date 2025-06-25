<template>
  <a-select v-model:value="value" style="width: 100%" :placeholder="$t('role')" :options="options"
    @change="handleChange">
    <template #suffixIcon>
      <EditOutlined />
    </template>
  </a-select>
</template>

<script lang="ts" setup>
import { EditOutlined } from '@ant-design/icons-vue';
import { computed, onMounted, ref } from 'vue';
import type { SelectProps } from 'ant-design-vue';
import { useRole } from './index';
import { storeToRefs } from 'pinia';
const useStore = useRole();
const { roleList } = storeToRefs(useStore);
const value = ref<number | null>(null);
const emit = defineEmits(['change']);

const options = computed<SelectProps['options']>(() =>
  roleList.value.map((item) => ({
    value: item.id,
    label: item.name,
  }))
);

const handleChange = (val: number) => {
  console.log('selected', val);
  emit('change', val);
};
onMounted(async () => {
  await useStore.getRole()

})
</script>
