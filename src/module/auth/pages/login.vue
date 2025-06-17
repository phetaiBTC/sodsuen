<template>
  <section class="S-bg w-full h-screen flex justify-center items-center">
    <a-form :model="formState" name="normal_login" class="login-form bg-amber-50 S-shadow" style="padding:30px;border-radius: 10px;"
      @finish="onFinish" @finishFailed="onFinishFailed">
      <a-form-item>
        <img src="/public/logo.jpeg" alt="..." style="width:150px;margin: 0 auto;border-radius: 5px;" class="S-shadow">
      </a-form-item>
      <a-form-item name="username" :rules="loginSchema.username.rules">
        <a-input v-model:value="formState.username" placeholder="Username">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item name="password" :rules="loginSchema.password.rules">
        <a-input-password v-model:value="formState.password" placeholder="Password">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item>
        <a-form-item name="remember" no-style>
          <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
        </a-form-item>
        <a class="login-form-forgot" href="">Forgot password</a>
      </a-form-item>
        <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button" style="width: 100%;">
          Log in
        </a-button>
    </a-form>
  </section>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { loginSchema } from '../schema';
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
</script>
<style scoped>

</style>
