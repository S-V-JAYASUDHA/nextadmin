import Image from 'next/image';
import Link from 'next/link';
import styles from './genre.module.css';

// Sample book data - you can expand this or fetch from a database
const bookGenres = {
  fiction: [
    {
      id: '1',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: 15.99,
      image: '/book1.jpg',
      genre: 'Fiction'
    },
    {
      id: '2',
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      price: 12.99,
      image: '/book2.jpg',
      genre: 'Fiction'
    },
    {
      id: '3',
      title: '1984',
      author: 'George Orwell',
      price: 14.99,
      image: '/book3.jpg',
      genre: 'Fiction'
    },
    {
      id: '4',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 13.99,
      image: '/book4.jpg',
      genre: 'Fiction'
    }
  ],
  'non-fiction': [
    {
      id: '5',
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      price: 16.99,
      image: '/book5.jpg',
      genre: 'Non-Fiction'
    },
    {
      id: '6',
      title: 'A Brief History of Time',
      author: 'Stephen Hawking',
      price: 15.50,
      image: '/book6.jpg',
      genre: 'Non-Fiction'
    }
  ],
  mystery: [
    {
      id: '7',
      title: 'The Girl with the Dragon Tattoo',
      author: 'Stieg Larsson',
      price: 14.99,
      image: '/book7.jpg',
      genre: 'Mystery'
    },
    {
      id: '8',
      title: 'Gone Girl',
      author: 'Gillian Flynn',
      price: 13.50,
      image: '/book8.jpg',
      genre: 'Mystery'
    }
  ],
  'science-fiction': [
    {
      id: '9',
      title: 'Dune',
      author: 'Frank Herbert',
      price: 15.99,
      image: '/book9.jpg',
      genre: 'Science Fiction'
    },
    {
      id: '10',
      title: 'Ender\'s Game',
      author: 'Orson Scott Card',
      price: 12.99,
      image: '/book10.jpg',
      genre: 'Science Fiction'
    }
  ],
  biography: [
    {
      id: '11',
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      price: 16.50,
      image: '/book11.jpg',
      genre: 'Biography'
    },
    {
      id: '12',
      title: 'Alexander Hamilton',
      author: 'Ron Chernow',
      price: 15.99,
      image: '/book12.jpg',
      genre: 'Biography'
    }
  ]
};

export default function GenrePage({ params }) {
  const { genre } = params;
  const books = bookGenres[genre] || [];

  return (
    <main className={styles.main}>
      <h1 className={styles.pageTitle}>{genre.charAt(0).toUpperCase() + genre.slice(1)} Books</h1>
      
      <div className={styles.booksGrid}>
        {books.map((book) => (
          <div key={book.id} className={styles.bookCard}>
            <Image
              src={book.image}
              alt={book.title}
              width={200}
              height={300}
              className={styles.bookImage}
            />
            <div className={styles.bookDetails}>
              <h3 className={styles.bookTitle}>{book.title}</h3>
              <p className={styles.bookAuthor}>by {book.author}</p>
              <p className={styles.bookPrice}>Price: ${book.price}</p>
              <Link href={`/book/${book.id}`} className={styles.viewDetailsLink}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(bookGenres).map((genre) => ({
    genre: genre
  }));
}