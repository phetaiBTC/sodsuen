export const loginSchema = {
    username: {
        rules: [
            {
                required: true,
                message: 'Please input your username!',
            },
        ],
    },
    password: {
        rules: [
            {
                required: true,
                message: 'Please input your password!',
            },
        ],
    },
}