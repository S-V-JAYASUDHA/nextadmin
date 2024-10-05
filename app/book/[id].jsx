import { useRouter } from 'next/router';
import styles from './bookDetails.module.css'; // Import specific styles for the book details page

export default function BookDetails() {
  const router = useRouter();
  const { id } = router.query; // Extract the dynamic id from the URL

  // Sample book data (In a real app, you'd fetch this data from a server or database)
  const books = {
    1: { title: 'To Kill a Mockingbird', author: 'Harper Lee', price: '$15.99', description: 'A novel about racial injustice in the deep South.' },
    2: { title: 'Ender\'s Game', author: 'Orson Scott Card', price: '$12.99', description: 'A story about a young boy trained to defend Earth from alien threats.' },
    3: { title: 'Pride and Prejudice', author: 'Jane Austen', price: '$10.99', description: 'A romantic novel about manners and courtship in the British gentry.' }
  };

  const book = books[id]; // Get the book data based on the id

  if (!book) {
    return <p>Book not found.</p>;
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{book.title}</h1>
      <p className={styles.author}>Author: {book.author}</p>
      <p className={styles.price}>Price: {book.price}</p>
      <p className={styles.description}>{book.description}</p>
    </main>
  );
}
