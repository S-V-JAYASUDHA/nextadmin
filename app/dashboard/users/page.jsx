import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Link from 'next/link';
import Image from 'next/image';

const UsersPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user..." />
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image 
                                    src="/noavatar.png"
                                    alt="User Avatar"
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                Jaya
                            </div>
                        </td>
                        <td>jaya@gmail.com</td>
                        <td>13.01.2022</td>
                        <td>Admin</td>
                        <td>active</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/dashboard/users/test">
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <Link href="/dashboard/users/delete">
                                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    );
}

export default UsersPage;
