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
          <li><Link href="/virtual-bookshelf" className={styles.link}>Bookshelf</Link></li>
          <li><Link href="/about" className={styles.aboutLink}>About Us</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/signin" className={styles.link}>Sign In</Link></li>
          <li><Link href="/signup" className={styles.link}>Sign Up</Link></li>
        </ul>
        
        <div className={styles.searchBox}>
          <input type="text" placeholder="Search for books..." />
        </div>
      </nav>

      {/* Banner Section */}
      <section className={styles.banner}>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerSlide}>
            <Image
              src="/banner1.jpg"
              alt="Banner Image 1"
              layout="fill"
              className={styles.bannerImage}
            />
            
          </div>
          <div className={styles.bannerSlide}>
            <Image
              src="/banner2.jpg"
              alt="Banner Image 2"
              layout="fill"
              className={styles.bannerImage}
            />
          </div>
          <div className={styles.bannerSlide}>
            <Image
              src="/banner3.jpg"
              alt="Banner Image 3"
              layout="fill"
              className={styles.bannerImage}
            />
          </div>
          <div className={styles.bannerSlide}>
            <Image
              src="/banner4.jpg"
              alt="Banner Image 4"
              layout="fill"
              className={styles.bannerImage}
            />
          </div>
        </div>
        <div className={styles.bannerControls}>
          {/* Optionally add control buttons here */}
        </div>
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
          <Bookslide src="/book1.jpg" bookname="Book Title 1" author="Harper Lee" price="15.99" />
          <Bookslide src="/book2.jpg" bookname="Book Title 2" author="Orson Scott Card" price="12.99" />
          <Bookslide src="/book3.jpg" bookname="Book Title 3" author="Jane Austen" price="34.23" />
        </div>
      </section>
    </main>
  );
}
