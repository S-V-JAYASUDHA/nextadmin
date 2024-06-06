"use client"
import Link from "next/link"
import styles from "./menuLink.module.css" // Ensure the correct relative path is used
import { usePathname } from "next/navigation"

const MenuLink = ({ item }) => {
    const pathname = usePathname();

    return (
        <Link href={item.path} legacyBehavior>
            <a className={`${styles.container} ${pathname === item.path ? styles.active : ''}`}>
                {item.icon}
                {item.title}
            </a>
        </Link>
    );
}

export default MenuLink;
