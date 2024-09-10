import Link from 'next/link';
import Bookslide from '@/components/bookshelf';
import styles from './virtualBookshelf.module.css';  // CSS specific to this page

export default function VirtualBookshelf() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Your Virtual Bookshelf</h1>

      <section className={styles.bookshelfGrid}>
        <Bookslide src="/book4.jpg" bookname="book4" author="Author 1" price="14.99" />
        <Bookslide src="/book5.jpg" bookname="book5" author="Author 2" price="19.99" />
        <Bookslide src="/book6.jpg" bookname="book6" author="Author 3" price="9.99" />
      </section>

      <Link href="/" className={styles.backLink}>Go back to Home</Link>
    </main>
  );
}
