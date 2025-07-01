<template>

    <a-select v-model:value="value" style="width: 100%" :placeholder="$t('district')" :options="options"
      @change="handleChange">
      <template #suffixIcon>
        <AimOutlined />
      </template>
    </a-select>

</template>

<script lang="ts" setup>
import { AimOutlined } from '@ant-design/icons-vue';
import { computed, onMounted, ref } from 'vue';
import type { SelectProps } from 'ant-design-vue';
import { useDistrict } from './index';
import { storeToRefs } from 'pinia';
const districtStore = useDistrict();
const { districtList } = storeToRefs(districtStore);
const value = ref<number | null>(null);
const emit = defineEmits(['change']);

const options = computed<SelectProps['options']>(() =>
  districtList.value.map((item) => ({
    value: item.id,
    label: item.name,
  }))
);

const handleChange = (val: number) => {
  console.log('selected', val);
  emit('change', val);
};
onMounted(async () => {
  await districtStore.getDistrictList()

})
</script>
