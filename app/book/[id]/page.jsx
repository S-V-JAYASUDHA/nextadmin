import Image from 'next/image';
import Link from 'next/link';
import { books } from '@/app/virtual-bookshelf/books';
import styles from './bookDetails.module.css';

export async function generateStaticParams() {
  return books.map((book) => ({
    id: book.id
  }));
}

export default function BookDetails({ params }) {
  const book = books.find((b) => b.id === params.id);

  if (!book) return <div>Book not found</div>;

  return (
    <div className={styles.container}>
      <div className={styles.bookDetailsWrapper}>
        <div className={styles.bookCover}>
          <Image
            src={book.coverImage}
            alt={`Cover of ${book.title}`}
            width={300}
            height={450}
            className={styles.coverImage}
          />
        </div>
        
        <div className={styles.bookInfo}>
          <h1 className={styles.bookTitle}>{book.title}</h1>
          <h2 className={styles.bookAuthor}>by {book.author}</h2>
          
          <div className={styles.bookMetadata}>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Published:</strong> {book.publishedYear}</p>
            <p><strong>Pages:</strong> {book.pages}</p>
          </div>
          
          <div className={styles.bookDescription}>
            <h3>Description</h3>
            <p>{book.description}</p>
          </div>
          
          <div className={styles.actionButtons}>
            <button className={styles.readButton}>Start Reading</button>
            <Link href="/virtual-bookshelf" className={styles.backButton}>
              Back to Bookshelf
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}