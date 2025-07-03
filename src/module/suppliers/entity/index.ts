import type { TableColumnsType } from 'ant-design-vue';
import { Bi18n } from '@/util/Bi18n';

export const SupplierColumns: TableColumnsType = [
    { title: Bi18n('no'), dataIndex: 'no', key: 'no', fixed: 'left' ,width: 70},
    { title: Bi18n('name'),width: 200, dataIndex: 'name', key: 'name', fixed: 'left' },
    { title: Bi18n('email'), dataIndex: 'email', key: 'email'},
    { title: Bi18n('contact_person'), dataIndex: 'contact_person', key: 'contact_person'},
    { title: Bi18n('phone'), dataIndex: 'phone', key: 'phone'},
    { title: Bi18n('address'), dataIndex: 'address', key: 'address'},
    { title: Bi18n('payment_terms'), dataIndex: 'payment_terms', key: 'payment_terms'},
    { title: Bi18n('status'),width: 80, dataIndex: 'is_active', key: 'is_active', },
    { title: Bi18n('createdAt'), dataIndex: 'createdAt', key: 'createdAt' },
    { title: Bi18n('updatedAt'), dataIndex: 'updatedAt', key: 'updatedAt' },
    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 160,
    },
];
export interface SupplierItem {
    id?: number;
    name: string,
    contact_person: string,
    phone: string,
    address: string,
    email: string,
    payment_terms: string,
    is_active: true
    createdAt?: string;
    updatedAt?: string;
}