import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.css'; 
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

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
          <SearchBar />
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
          <div className={styles.card}>
            <Image
              src="/book1.jpg"
              alt="Book 1"
              width={200}
              height={300}
              className={styles.image}
            />
            <p className={styles.author}>Author:  Harper Lee</p>
            <p className={styles.price}>Price: $15.99</p>
            <Link href="/book/1" className={styles.link}>View Details</Link>
          </div>
          <div className={styles.card}>
            <Image
              src="/book2.jpg"
              alt="Book 2"
              width={200}
              height={300}
              className={styles.image}
            />
            <p className={styles.author}>Author: Orson Scott Card</p>
            <p className={styles.price}>Price: $12.99</p>
            <Link href="/book/2" className={styles.link}>View Details</Link>
          </div>
          <div className={styles.card}>
            <Image
              src="/book3.jpg"
              alt="Book 3"
              width={200}
              height={300}
              className={styles.image}
            />
            <p className={styles.author}>Author: Jane Austen</p>
            <p className={styles.price}>Price: $10.99</p>
            <Link href="/book/3" className={styles.link}>View Details</Link>
          </div>

          <div className={styles.card}>
            <Image
              src="/book4.jpg"
              alt="Book 3"
              width={200}
              height={300}
              className={styles.image}
            />
            <p className={styles.author}>Author: Jane Austen</p>
            <p className={styles.price}>Price: $10.99</p>
            <Link href="/book/3" className={styles.link}>View Details</Link>
          </div>

          <div className={styles.card}>
            <Image
              src="/book5.jpg"
              alt="Book 3"
              width={200}
              height={300}
              className={styles.image}
            />
            <p className={styles.author}>Author: Jane Austen</p>
            <p className={styles.price}>Price: $10.99</p>
            <Link href="/book/3" className={styles.link}>View Details</Link>
          </div>
        </div>
      </section>
      <br />
      <br />
      <Footer/>
    </main>
  );
}
