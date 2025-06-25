<template>
  <section class="S-bg w-full h-screen flex justify-center items-center">
    <a-form :model="formState" name="normal_login" class="login-form bg-amber-50 S-shadow"
      style="padding:30px;border-radius: 10px;" @finish="onFinish" @finishFailed="onFinishFailed">
      <a-form-item>
        <img src="/public/logo.jpeg" alt="..." style="width:150px;margin: 0 auto;border-radius: 5px;" class="S-shadow">
      </a-form-item>
      <BaseInput v-model="formState.email" label="email" :icon="MailOutlined" :rules="addUserSchema.email.rules" />
      <!-- <a-form-item name="password" :rules="loginSchema.password.rules"> -->
      <BaseInputPassword v-model="formState.password" label="password" :icon="LockOutlined"
        :rules="addUserSchema.password.rules" />
      <!-- </a-form-item> -->

      <a-form-item>
        <a-form-item name="remember" no-style>
          <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
        </a-form-item>
        <a class="login-form-forgot" href="">Forgot password</a>
      </a-form-item>
      <a-button :disabled="disabled" :loading="loading" type="primary" html-type="submit" class="login-form-button" style="width: 100%;">
        Log in
      </a-button>
    </a-form>
  </section>
</template>

<script lang="ts" setup>
import { reactive, computed, ref } from 'vue';
import { LockOutlined, MailOutlined } from '@ant-design/icons-vue';
import { errorM, successM } from '@/util/message.util';
import api from '@/plugins/axios';
import { addUserSchema } from '@/module/user/schema';
import BaseInputPassword from '@/components/BaseInputPassword.vue';
import BaseInput from '@/components/BaseInput.vue';
import { router } from '@/router';
const loading = ref(false);
interface FormState {
  email: string;
  password: string;
  remember: boolean;
}
const formState = reactive<FormState>({
  email: 'admin@gmail.com',
  password: '1234',
  remember: true,
});
const onFinish = async (values: any) => {
  loading.value = true;
  console.log('Success:', values);
  await api.post('/auth/login', {
    email: formState.email,
    password: formState.password
  })
    .then(res => {
      console.log(res);
      successM(res.data.message);
      localStorage.setItem('token', res.data.access_token);
      loading.value = false;
      router.push('/')
    })
    .catch(err => {
      loading.value = false;
      console.log(err);
      errorM(err.response.data.message);
    });
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const disabled = computed(() => {
  return !(formState.email && formState.password);
});

</script>
<style scoped></style>
