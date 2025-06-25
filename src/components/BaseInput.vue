<template>
    <a-form-item :name="label" :rules="rules">
        <a-input :placeholder="$t(label)" class="no-spinner" :value="modelValue"
            @input="emit('update:modelValue', $event.target.value)">
            <template #prefix>
                <component :is="icon" class="site-form-item-icon" />
            </template>
        </a-input>
    </a-form-item>
</template>

<script setup lang="ts">
import type { Rule } from 'ant-design-vue/es/form'

defineProps<{
    modelValue: string
    label: string
    rules: Rule[]
    icon: any,
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()
</script>
<style scoped>
</style>
