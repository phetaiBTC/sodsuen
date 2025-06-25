<template>
  <a-table :columns="UserColumns" :data-source="usersList" :scroll="{ x: 1500, y: 282 }" :loading="loading">
    <template #bodyCell="{ column, record, index }">
      <template v-if="column.key === 'no'">
        <span>{{ index + 1 }}</span>
      </template>
      <template v-if="column.key === 'operation'">
        <div class="w-full flex justify-between">
          <a-button type="primary" @click="onEdit(record)">{{ $t('edit') }}</a-button>
          <a-popover :open="openPopover === record.id" title="Delete?" trigger="click">
            <template #content>
              <a @click="openPopover = null">Close</a>
              <a @click="onDelete(record.id)" style="margin-left: 10px; color: red;">Confirm</a>
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
import { UserColumns, type UserItem } from '../entity'
import { ref, onMounted } from 'vue';
import api from '@/plugins/axios';
import { errorM, successM } from '@/util/message.util';
import { useUser } from '../store';
import { storeToRefs } from 'pinia';
const userStore = useUser();
const { usersList } = storeToRefs(userStore);
const loading = ref<boolean>(false);
const openPopover = ref<number | null>(null);

const onEdit = async (record: UserItem) => {
  console.log('Edit', record);
  await userStore.getAllUsers();
};

const onDelete = async (id: number) => {
  await api.delete(`/users/${id}`).then((res) => {
    successM(res.data.message);
    userStore.getAllUsers()
  });
};

onMounted(async() => {
  await userStore.getAllUsers();
});

</script>
