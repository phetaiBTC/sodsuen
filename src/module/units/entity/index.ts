import type { TableColumnsType } from 'ant-design-vue';
import { Bi18n } from '@/util/Bi18n';

export const UnitColumns: TableColumnsType = [
    { title: Bi18n('no'), dataIndex: 'no', key: 'no' },
    { title: Bi18n('name'), dataIndex: 'name', key: 'name' },
    { title: Bi18n('symbol'), dataIndex: 'symbol', key: 'symbol', },
    { title: Bi18n('description'), dataIndex: 'description', key: 'description' },
    { title: Bi18n('createdAt'), dataIndex: 'createdAt', key: 'createdAt' },
    { title: Bi18n('updatedAt'), dataIndex: 'updatedAt', key: 'updatedAt' },
    { title: 'Action', key: 'operation', width: 160 },
];

export interface UnitItem {
    id: number;
    name: string;
    symbol: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}