import type { RuleObject } from "ant-design-vue/es/form";

export function Vrequired(name: string): RuleObject {
    return { required: true, message: `Please input your ${name}!` };
}
export function Vemail(): RuleObject {
    return { type: 'email', message: `Invalid email!` };
}
export function Vphone(): RuleObject {
    return { len: 11, message: `Phone number must be 020xxxxxxxx` };
}
export function Vnumber(name: string): RuleObject {
    return { pattern: /^\d+$/, message: `${name} must be number` };
}
