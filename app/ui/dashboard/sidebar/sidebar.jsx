
import Image from 'next/image';
import MenuLink from './menuLink/menuLink';
import styles from './sidebar.module.css';
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdSettings,
    MdHelpCenter,
} from 'react-icons/md';

const menuItems = [
    {
        title: 'Pages',
        list: [
            {
                title: 'Dashboard',
                path: '/dashboard',
                icon: <MdDashboard />,
            },
            {
                title: 'Users',
                path: '/dashboard/users',
                icon: <MdSupervisedUserCircle />,
            },
            {
                title: 'Products',
                path: '/dashboard/products',
                icon: <MdShoppingBag />,
            },
        ],
    },
    {
        title: 'Users',
        list: [
            {
                title: 'Settings',
                path: '/dashboard/settings',
                icon: <MdSettings />,
            },
            {
                title: 'Help',
                path: '/dashboard/help',
                icon: <MdHelpCenter />,
            },
        ],
    },
];

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src="/noavatar.png" alt="User Image" width="50" height="50" />
                <div className={styles.userDetail}>
                    <span className={styles.username}>Jaya</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        <ul className={styles.subList}>
                            {cat.list.map((item) => (
                                <li key={item.title}>
                                    <MenuLink item={item} />
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
