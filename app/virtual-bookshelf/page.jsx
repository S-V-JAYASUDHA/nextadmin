import Image from 'next/image';
import Link from 'next/link';
import styles from './virtualBookshelf.module.css';  // CSS specific to this page

export default function VirtualBookshelf() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Your Virtual Bookshelf</h1>

      <section className={styles.bookshelfGrid}>
        {/* Example book cards */}
        <div className={styles.bookCard}>
          <Image
            src="/book4.jpg"
            alt="Book 1"
            width={150}
            height={220}
            className={styles.bookImage}
          />
          <h3 className={styles.bookTitle}>Book Title 1</h3>
          <Link href="/book/1" className={styles.bookLink}>View Details</Link>
        </div>

        <div className={styles.bookCard}>
          <Image
            src="/book-cover-2.jpg"
            alt="Book 2"
            width={150}
            height={220}
            className={styles.bookImage}
          />
          <h3 className={styles.bookTitle}>Book Title 2</h3>
          <Link href="/book/2" className={styles.bookLink}>View Details</Link>
        </div>
      </section>

      <Link href="/" className={styles.backLink}>Go back to Home</Link>
    </main>
  );
}
