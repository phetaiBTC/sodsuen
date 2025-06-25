import type { Rule } from "ant-design-vue/es/form";

export const addUserSchema: Record<string, { rules: Rule[] }> = {
    username: {
        rules: [{ required: true, message: 'Please input your username!' }],
    },
    password: {
        rules: [{ required: true, message: 'Please input your password!' }],
    },
    email: {
        rules: [
            { type: 'email', message: 'Invalid email!' },
            { required: true, message: 'Please input your email!' }
        ],
    },
    phone:{
        rules: [{ required: true, message: 'Please input your phone!' },{len: 11, message: 'Phone number must be 020xxxxxxxx' },{ pattern: /^\d{11}$/, message: 'Password must be 11 digits' },],
    }
}
