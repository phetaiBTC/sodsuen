import { message } from 'ant-design-vue';
export const successM = (string: string) => {
  message.success(string);
};
export const errorM = (string: string) => {
  message.error(string);
};
export const warningM = (string: string) => {
  message.warning(string);
};