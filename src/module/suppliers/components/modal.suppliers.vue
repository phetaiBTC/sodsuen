<template>
    <a-modal v-model:open="props.visible" :title="$t('add') + $t('unit')" @ok="handleOk" :ok-text="$t('save')"
        :cancel-text="$t('cancel')" @cancel="handleCancel">
        <a-form :model="formState" name="normal_login" class="login-form" :disabled="loading">
            <a-row :gutter="16">
                <a-col :span="12">
                    <BaseInput v-model="formState.name" label="name" :icon="EditOutlined"
                        :rules="[Vrequired('name')]" />
                </a-col>
                <a-col :span="12">
                    <BaseInput v-model="formState.email" label="email" :icon="MailOutlined"
                        :rules="[Vrequired('email'), Vemail()]" />
                </a-col>
            </a-row>

            <a-row :gutter="16">
                <a-col :span="12">
                    <BaseInput v-model="formState.contact_person" label="contact_person" :icon="MailOutlined"
                        :rules="[Vrequired('contact person')]" />
                </a-col>
                <a-col :span="12">
                    <BaseInput v-model="formState.phone" label="phone" :icon="PhoneOutlined"
                        :rules="[Vrequired('phone'), Vnumber('phone'), Vphone()]" />
                </a-col>
            </a-row>

            <a-row :gutter="16">
                <a-col :span="12">
                    <BaseInput v-model="formState.address" label="address" :icon="MailOutlined"
                        :rules="[Vrequired('address')]" />
                </a-col>
                <a-col :span="12">
                    <BaseInput v-model="formState.payment_terms" label="payment_terms" :icon="MailOutlined"
                        :rules="[Vrequired('payment terms')]" />
                </a-col>
            </a-row>
        </a-form>
    </a-modal>
</template>

<script setup lang="ts">
import { EditOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons-vue';
import BaseInput from '@/components/BaseInput.vue';
import { reactive, watch } from 'vue';
import { Vemail, Vnumber, Vphone, Vrequired } from '@/schema/baseSchema';
import { createSupplier, updateSupplier } from '../composables';
import { storeToRefs } from 'pinia';
import { storeSuppliers } from '../store/index';
import type { SupplierItem } from '../entity';

const { supplier, loading } = storeToRefs(storeSuppliers());
const emit = defineEmits(['update:visible']);
const formState = reactive<SupplierItem>({
    name: '',
    contact_person: '',
    phone: "",
    address: "",
    email: "",
    payment_terms: "",
    is_active: true
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
        formState.name = supplier.value.name;
        formState.contact_person = supplier.value.contact_person;
        formState.phone = supplier.value.phone;
        formState.address = supplier.value.address;
        formState.email = supplier.value.email;
        formState.payment_terms = supplier.value.payment_terms;
    }
})

const handleOk = async () => {
    if (props.type === 'edit') {
        if (supplier.value.id !== undefined) {
            await updateSupplier(supplier.value.id, formState);
        }
    }
    else {
        await createSupplier(formState);
        formState.name = '';
        formState.contact_person = '';
        formState.phone = '';
        formState.address = '';
        formState.email = '';
        formState.payment_terms = '';
    }
    emit('update:visible', false);
};

const handleCancel = () => {
    emit('update:visible', false);
};

</script>
