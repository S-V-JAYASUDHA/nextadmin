import Link from 'next/link';
import BookCard from './BookCard';
import { books } from './books';
import styles from './virtualBookshelf.module.css';

export default function VirtualBookshelf() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Your Virtual Bookshelf</h1>
      
      <section className={styles.bookshelfGrid}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </section>
      
      <div className={styles.backButtonContainer}>
        <Link href="/" className={styles.backButton}>
          Back to Home
        </Link>
      </div>
    </main>
  );
}