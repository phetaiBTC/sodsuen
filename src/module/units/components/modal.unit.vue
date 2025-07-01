<template>
    <a-modal v-model:open="props.visible" :title="$t('add') + $t('unit')" @ok="handleOk" :ok-text="$t('save')"
        :cancel-text="$t('cancel')" @cancel="handleCancel">
        <a-form :model="formState" name="normal_login" class="login-form" :disabled="loading">
            <a-row :gutter="16">
                <a-col :span="24">
                    <BaseInput v-model="formState.name" label="name" :icon="EditOutlined"
                        :rules="[Vrequired('name')]" />
                </a-col>
                <a-col :span="24">
                    <BaseInput v-model="formState.symbol" label="symbol" :icon="DiffOutlined"
                        :rules="[Vrequired('symbol')]" />
                </a-col>
                <a-col :span="24">
                    <BaseInput v-model="formState.description" label="description" :icon="UnorderedListOutlined"
                        :rules="[Vrequired('description')]" />
                </a-col>
            </a-row>
        </a-form>
    </a-modal>
</template>

<script setup lang="ts">
import { DiffOutlined, UnorderedListOutlined, EditOutlined } from '@ant-design/icons-vue';
import BaseInput from '@/components/BaseInput.vue';
import { reactive, watch } from 'vue';
import { Vrequired } from '@/schema/baseSchema';
import { createUnit, updateUnit } from '../composables';
import { storeToRefs } from 'pinia';
import { storeUnit } from '../store';

const { unit, loading } = storeToRefs(storeUnit());
const emit = defineEmits(['update:visible']);
const formState = reactive({
    name: '',
    symbol: '',
    description: ''
})
const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'add'
    },
});

watch(props, () => {
    if (props.type === 'edit') {
        formState.name = unit.value.name;
        formState.symbol = unit.value.symbol;
        formState.description = unit.value.description;
    }
})

const handleOk = async () => {
    if (props.type === 'edit') {
        await updateUnit(unit.value.id, formState);
    }
    else {
        await createUnit(formState);
        formState.name = '';
        formState.symbol = '';
        formState.description = '';
    }
    emit('update:visible', false);
};

const handleCancel = () => {
    emit('update:visible', false);
};

</script>
