import Link from 'next/link';
import styles from './signup.module.css';

export default function SignUp() {
  return (
    <main className={styles.main}>
      <section className={styles.signUpSection}>
        {/* Add your image here */}
        

        <h1 className={styles.title}>Sign Up</h1>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="Confirm your password" required />
          </div>
          <button type="submit" className={styles.signUpButton}>Sign Up</button>
        </form>

        <p className={styles.signInPrompt}>
          Already have an account? <Link href="/signin" className={styles.link}>Sign In</Link>
        </p>
      </section>
    </main>
  );
}
