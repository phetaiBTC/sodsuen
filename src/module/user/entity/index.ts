import type { TableColumnsType } from 'ant-design-vue';
import { Bi18n } from '@/util/Bi18n';

export const UserColumns: TableColumnsType = [
    { title: Bi18n('no'), dataIndex: 'no', key: 'no', fixed: 'left', width: 70 },
    { title: Bi18n('username'), dataIndex: 'username', key: 'username', fixed: 'left', width: 200 },
    { title: Bi18n('email'), width: 200, dataIndex: 'email', key: 'age', },
    { title: Bi18n('phone'), dataIndex: 'phone', key: 'phone', width: 150 },
    { title: Bi18n('role'), dataIndex: 'role', key: 'role', width: 120 },
    { title: Bi18n('province'), dataIndex: 'province', key: 'province', width: 150 },
    { title: Bi18n('district'), dataIndex: 'district', key: 'district', width: 150 },
    { title: Bi18n('createdAt'), dataIndex: 'createdAt', key: 'createdAt', width: 150 },
    { title: Bi18n('updatedAt'), dataIndex: 'updatedAt', key: 'updatedAt', width: 150 },
    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 150,
    },
];

export interface UserItem {
    id: number;
    username: string;
    email: string;
    district: string;
    province: string;
    role: string;
    createdAt: string;
    updatedAt: string;
}