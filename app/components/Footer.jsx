import Link from 'next/link';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          {/* Company Info */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>BookVerse</h3>
            <p className={styles.companyDescription}>
              Your ultimate destination for literary exploration. 
              Discover, read, and connect through the world of books.
            </p>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Twitter" className={styles.socialIcon}>
                <Twitter size={24} />
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/virtual-bookshelf">Bookshelf</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Book Categories */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Book Categories</h4>
            <ul className={styles.linkList}>
              <li><Link href="/genre/fiction">Fiction</Link></li>
              <li><Link href="/genre/non-fiction">Non-Fiction</Link></li>
              <li><Link href="/genre/mystery">Mystery</Link></li>
              <li><Link href="/genre/science-fiction">Science Fiction</Link></li>
              <li><Link href="/genre/biography">Biography</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Contact Us</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPin size={20} />
                <span>123 Book Street, Literary Lane, NY 10001</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={20} />
                <span>(555) 123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <Mail size={20} />
                <span>support@bookverse.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className={styles.newsletterSection}>
          <h4>Subscribe to Our Newsletter</h4>
          <p>Stay updated with the latest books and exclusive offers</p>
          <form className={styles.newsletterForm}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              required 
              className={styles.newsletterInput}
            />
            
            <button type="submit" className={styles.newsletterButton}>
              Subscribe
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className={styles.copyrightSection}>
          <p>&copy; 2024 BookVerse. All Rights Reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}