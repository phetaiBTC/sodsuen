<template>
  <a-select v-model:value="value" style="width: 100%" :placeholder="$t('province')" :options="options"
    @change="handleChange">
    <template #suffixIcon>
      <AimOutlined />
    </template>
  </a-select>
</template>

<script lang="ts" setup>
import { AimOutlined } from '@ant-design/icons-vue';
import { onMounted, ref, computed } from 'vue';
import type { SelectProps } from 'ant-design-vue';
import { useProvince } from './index';
import { useDistrict } from '../district/index';
const { getByIdDistrictList } = useDistrict()
import { storeToRefs } from 'pinia';

const provinceStore = useProvince();
const { provinceList } = storeToRefs(provinceStore);

const value = ref<number | null>(null);

const options = computed<SelectProps['options']>(() =>
  provinceList.value.map((item) => ({
    value: item.id,
    label: item.name,
  }))
);
const handleChange = (val: number) => {
  getByIdDistrictList(val)
};

onMounted(async () => {
  await provinceStore.getProvinceList();
});
</script>
