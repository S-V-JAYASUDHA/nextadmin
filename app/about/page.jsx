import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';  // CSS specific to the About Us page

export default function About() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>About Us</h1>

      <section className={styles.intro}>
        <Image
          src="/team.jpg"
          alt="Our Team"
          width={850}
          height={400}
          className={styles.teamImage}
        />
        <p className={styles.description}>
          Welcome to the Book Stall! We are a passionate team dedicated to bringing you the best books and literary experiences. Our mission is to create a platform where readers can discover their next great read and connect with the world of literature.
        </p>
      </section>

      <section className={styles.mission}>
        <h2 className={styles.sectionTitle}>Our Mission</h2>
        <p className={styles.missionStatement}>
          At the Book Stall, our mission is to provide a diverse selection of books that cater to all interests and ages. We strive to create a welcoming environment for readers to explore new genres and find their next favorite book.
        </p>
      </section>

      <section className={styles.team}>
        <h2 className={styles.sectionTitle}>Meet the Team</h2>
        <div className={styles.genresGrid}>
          <div className={styles.genreCard}>
            
            <h3 className={styles.memberName}>Jayasudha</h3>
            <p className={styles.memberRole}>Founder & CEO</p>
          </div>

          <div className={styles.genreCard}>
            
            <h3 className={styles.memberName}>Famitha</h3>
            <p className={styles.memberRole}>Head of Marketing</p>
          </div>

          <div className={styles.genreCard}>
            
            <h3 className={styles.memberName}>Arunesh</h3>
            <p className={styles.memberRole}>Customer Support</p>
          </div>

          <div className={styles.genreCard}>
            
            <h3 className={styles.memberName}>Bavithra</h3>
            <p className={styles.memberRole}>Marketing Director</p>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <p className={styles.contactInfo}>
          Have any questions or feedback? Feel free to reach out to us at <a href="mailto:info@bookstall.com" className={styles.email}>info@bookstall.com</a>.
        </p>
      </section>

      <Link href="/" className={styles.backLink}>Back to Home</Link>
    </main>
  );
}
