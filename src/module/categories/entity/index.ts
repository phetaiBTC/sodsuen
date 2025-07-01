import type { TableColumnsType } from 'ant-design-vue';
import { Bi18n } from '@/util/Bi18n';

export const CategoriesColumns: TableColumnsType = [
    { title: Bi18n('no'), dataIndex: 'no', key: 'no', fixed: 'left' },
    { title: Bi18n('name'), dataIndex: 'name', key: 'name', fixed: 'left' },
    { title: Bi18n('description'), dataIndex: 'description', key: 'description', },
    { title: Bi18n('createdAt'), dataIndex: 'createdAt', key: 'createdAt' },
    { title: Bi18n('updatedAt'), dataIndex: 'updatedAt', key: 'updatedAt' },
    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 160,
    },
];
export interface CategoryItem {
    id: number;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}