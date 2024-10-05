import Link from 'next/link';
import styles from './signin.module.css';  // Assuming you create a separate CSS file for Sign In page styling

export default function SignIn() {
  return (
    <main className={styles.main}>
      <section className={styles.signInSection}>
        <h1 className={styles.title}>Sign In</h1>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className={styles.signInButton}>Sign In</button>
        </form>

        <p className={styles.signUpPrompt}>
          Don&apos;t have an account? <Link href="/signup" className={styles.link}>Sign Up</Link>
        </p>
      </section>
    </main>
  );
}
