<template>
    <a-modal v-model:open="props.visible" :title="$t('add') + $t('user')" @ok="handleOk" :ok-text="$t('save')"
        :cancel-text="$t('cancel')" @cancel="handleCancel">
        <a-form :model="formState" name="normal_login" class="login-form">
            <a-row :gutter="16">
                <a-col :span="12">
                    <BaseInput v-model="formState.username" label="username" :icon="UserOutlined"
                        :rules="addUserSchema.username.rules" />
                </a-col>
                <a-col :span="12">
                    <BaseInput v-model="formState.email" label="email" :icon="MailOutlined"
                        :rules="addUserSchema.email.rules" />
                </a-col>
            </a-row>
            
            <a-row :gutter="16">
                <a-col :span="12">
                    <BaseInputPassword v-model="formState.password" label="password" :icon="LockOutlined"
                        :rules="addUserSchema.password.rules" />
                </a-col>
                <a-col :span="12">
                    <BaseInput v-model="formState.phone" label="phone" :icon="PhoneOutlined"
                        :rules="addUserSchema.phone.rules" />
                </a-col>
            </a-row>
            
            <a-row :gutter="16">
                <a-col :span="12">
                    <select-province />
                </a-col>
                <a-col :span="12">
                    <select-dictrict @change="formState.districtId = $event" />
                </a-col>
            </a-row>
            

            <a-row :gutter="16" style="margin-top: 25px;">
                <a-col :span="12">
                    <select-role @change="formState.roleId = $event"/>
                </a-col>
            </a-row>
        </a-form>
    </a-modal>
</template>

<script setup lang="ts">
import { UserOutlined, MailOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons-vue';
import BaseInput from '@/components/BaseInput.vue';
import { reactive } from 'vue';
import { addUserSchema } from '../schema';
import BaseInputPassword from '@/components/BaseInputPassword.vue';
import selectDictrict from '@/components/district/select.dictrict.vue';
import selectProvince from '@/components/province/select.province.vue';
import selectRole from '@/components/role/select.role.vue';
import api from '@/plugins/axios';
import { errorM, successM } from '@/util/message.util';
import { useUser } from '../store';

const userStore = useUser();

// console.log(emailSchema)
const formState = reactive({
    username: '',
    email: '',
    password: '',
    phone: '',
    districtId: null,
    roleId: null
})
const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['update:visible']);

const handleOk =async () => {
    await api.post('/users', formState).then(res => {
        successM(res.data.message);
        userStore.getAllUsers();
        formState.username = '';
        formState.email = '';
        formState.password = '';
        formState.phone = '';
        formState.districtId = null;
        formState.roleId = null;
    }).catch(err => {
        errorM(err.response.data.message);
    })
    emit('update:visible', false);
};

const handleCancel = () => {
    emit('update:visible', false);
};
</script>
