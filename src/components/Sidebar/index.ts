// { key: '1', label: 'Option 1', icon: PieChartOutlined, route: 'home' },
// { key: '2', label: 'Option 2', icon: DesktopOutlined, route: 'home' },
// { key: 'sub1', label: 'User', icon: UserOutlined, children: [{ key: '3', label: 'Tom', route: 'home' }, { key: '4', label: 'Bill', route: 'home' }] },
// { key: 'sub2', label: 'Team', icon: TeamOutlined, children: [{ key: '6', label: 'Team 1', route: 'home' }, { key: '8', label: 'Team 2', route: 'home' }] },
// { key: '9', label: 'File', icon: FileOutlined, route: 'home' },
import {
    DesktopOutlined,
    UserOutlined,
    TagOutlined,
    TeamOutlined,
    UserAddOutlined,
    FileOutlined,
    ShoppingOutlined
} from '@ant-design/icons-vue';
interface childrenItem {
    label: string,
    route: string
}
interface MenuItem {
    label: string,
    icon: any,
    children?: childrenItem[],
    route?: string
}
export const menuSidebar: MenuItem[] = [
    { label: 'manage_users', icon: UserAddOutlined, route: 'user.index' },
    {
        label: 'manage_products',
        icon: ShoppingOutlined,
        children: [
            { label: 'unit', route: 'units.index' },
            { label: 'category', route: 'categories.index' }
        ]
    },
    { label: 'Option 2', icon: DesktopOutlined, route: 'home' },
    { label: 'Team', icon: TeamOutlined, children: [{ label: 'Team 1', route: 'home' }, { label: 'Team 2', route: 'home' }] },
    { label: 'File', icon: FileOutlined, route: 'home' },
    { label: 'Setting', icon: FileOutlined, route: 'home' }
]