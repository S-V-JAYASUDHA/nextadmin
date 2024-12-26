'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './SearchResults.module.css';

// Sample book data (would be replaced with actual database query)
const books = [
  {
    id: '1',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    price: 15.99,
    image: '/book1.jpg',
    description: 'A powerful story of racial injustice and moral growth in the American South.'
  },
  {
    id: '2',
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
    price: 17.99,
    image: '/book2.jpg',
    description: 'An epic science fiction novel set in a distant future of interstellar conflict.'
  },
  // ... add more books
];

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  // Filter books based on search query
  const searchResults = books.filter(book => 
    book.title.toLowerCase().includes(query.toLowerCase()) ||
    book.author.toLowerCase().includes(query.toLowerCase()) ||
    book.genre.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.searchResultsPage}>
      <div className={styles.searchHeader}>
        <h1>Search Results</h1>
        <p>Showing results for "{query}"</p>
      </div>

      {searchResults.length === 0 ? (
        <div className={styles.noResults}>
          <p>No books found matching your search.</p>
          <Link href="/virtual-bookshelf" className={styles.browseAllLink}>
            Browse All Books
          </Link>
        </div>
      ) : (
        <div className={styles.resultsGrid}>
          {searchResults.map((book) => (
            <div key={book.id} className={styles.bookCard}>
              <div className={styles.bookImageContainer}>
                <Image
                  src={book.image}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.bookDetails}>
                <h2>{book.title}</h2>
                <p className={styles.author}>by {book.author}</p>
                <p className={styles.genre}>{book.genre}</p>
                <p className={styles.description}>{book.description}</p>
                <div className={styles.bookActions}>
                  <span className={styles.price}>${book.price}</span>
                  <Link href={`/book/${book.id}`} className={styles.detailsLink}>
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}