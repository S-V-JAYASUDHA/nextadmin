import Image from 'next/image';
import Link from 'next/link';
import Bookslide from '@/components/bookslide';
import styles from './page.module.css';  // Assuming the CSS file is in the same directory

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Top Navigation Section */}
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/virtual-bookshelf" className={styles.link}>Bookshelf</Link></li>
        </ul>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Search for books..." />
        </div>
      </nav>

      {/* Banner Section */}
      <section className={styles.banner}>
        <Image
          src="/banner-image.jpg"
          alt="Book Store Banner"
          layout="fill"
          className={styles.bannerImage}
        />
      </section>

      {/* Genres Section */}
      <section className={styles.genresSection}>
        <h2 className={styles.sectionTitle}>Explore by Genre</h2>
        <div className={styles.genresGrid}>
          <div className={styles.genreCard}>
            <h3 className={styles.genreTitle}>Fiction</h3>
            <Link href="/genre/fiction" className={styles.seeAllLink}>See All</Link>
          </div>
          <div className={styles.genreCard}>
            <h3 className={styles.genreTitle}>Non-Fiction</h3>
            <Link href="/genre/non-fiction" className={styles.seeAllLink}>See All</Link>
          </div>
          <div className={styles.genreCard}>
            <h3 className={styles.genreTitle}>Mystery</h3>
            <Link href="/genre/mystery" className={styles.seeAllLink}>See All</Link>
          </div>
          <div className={styles.genreCard}>
            <h3 className={styles.genreTitle}>Science Fiction</h3>
            <Link href="/genre/science-fiction" className={styles.seeAllLink}>See All</Link>
          </div>
          <div className={styles.genreCard}>
            <h3 className={styles.genreTitle}>Biography</h3>
            <Link href="/genre/biography" className={styles.seeAllLink}>See All</Link>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className={styles.featuredBooksSection}>
        <h2 className={styles.sectionTitle}>Featured Books</h2>
        <div className={styles.grid}>

        <Bookslide src="/book1.jpg" bookname="book1" author="Harper Lee" price="15.99" />

        <Bookslide src="/book2.jpg" bookname="book2" author="Orson Scott Card" price="12.99" />

        <Bookslide src="/book3.jpg" bookname="book3" author="Jane Austen" price="34.23" />

        </div>
      </section>
    </main>
  );
}
