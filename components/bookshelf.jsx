import styles from '../app/virtual-bookshelf/virtualBookshelf.module.css'; // Correct path to CSS file
import Image from 'next/image';
import Link from 'next/link';

function Bookshelf({ src, bookname }) {
    return (
        <div className={styles.card}>
            <Image
              src={src}
              alt={bookname}
              width={150}
              height={220}
              className={styles.image}
            /> {/* Display the book name */}
            <Link href="/book/1" className={styles.link}>View Details</Link>
        </div>
    );
}

export default Bookshelf;
