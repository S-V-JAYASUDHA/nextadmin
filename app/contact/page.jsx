import Link from 'next/link'; // Import Link for navigation
import styles from './contact.module.css'; // Import the CSS specific to the contact page

export default function Contact() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Contact Us</h1>
      
      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input type="text" id="name" name="name" className={styles.input} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" name="email" className={styles.input} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea id="message" name="message" className={styles.textarea} rows="5" required></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>

      {/* Back to Home Button */}
      <div className={styles.backButtonContainer}>
        <Link href="/" className={styles.backButton}>
          Back to Home
        </Link>
      </div>
    </main>
  );
}
