
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Link from 'next/link';
import Image from 'next/image';

const ProductsPage = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a book..." />
                <Link href="/dashboard/products/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image 
                                    src="/noproduct.jpg"
                                    alt="User Avatar"
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                Wings of Fire
                            </div>
                        </td>
                        <td>Desc</td>
                        <td>$200</td>
                        <td>13.01.2022</td>
                        <td>72</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/dashboard/products/test">
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <Link href="/dashboard/products/delete">
                                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default ProductsPage 