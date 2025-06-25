<template>
    <a-form-item :name="label" :rules="rules">
        <a-input-password :value="modelValue" :placeholder="$t(label)"
            @input="emit('update:modelValue', $event.target.value)">
            <template #prefix>
                <component :is="icon" class="site-form-item-icon" />
            </template>
        </a-input-password>
    </a-form-item>
</template>

<script setup lang="ts">
import type { Rule } from 'ant-design-vue/es/form'

defineProps<{
    modelValue: string
    label: string
    rules: Rule[]
    icon: any
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()
</script>
