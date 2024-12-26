import Image from 'next/image';
import Link from 'next/link';
import styles from '../virtual-bookshelf/virtualBookshelf.module.css';

export default function BookCard({ book }) {
  return (
    <div className={styles.card}>
      <Image
        src={book.coverImage}
        alt={`Cover of ${book.title}`}
        width={150}
        height={220}
        className={styles.bookImage}
      />
      <div className={styles.cardDetails}>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <Link href={`/book/${book.id}`} className={styles.bookLink}>
          View Details
        </Link>
      </div>
    </div>
  );
}