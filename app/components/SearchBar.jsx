'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import styles from './SearchBar.module.css';

// Sample book data (in a real app, this would come from a database)
const books = [
  {
    id: '1',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    price: 15.99,
    image: '/book1.jpg'
  },
  {
    id: '2',
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
    price: 17.99,
    image: '/book2.jpg'
  },
  {
    id: '3',
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian Fiction',
    price: 14.99,
    image: '/book3.jpg'
  },
  {
    id: '4',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    price: 12.99,
    image: '/book4.jpg'
  },
  {
    id: '5',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic Fiction',
    price: 13.99,
    image: '/book5.jpg'
  }
];

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Perform search across title, author, and genre
    const results = books.filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);

    // If search is successful, navigate to search results page
    if (results.length > 0) {
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Search books by title, author, or genre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          <Search size={20} />
        </button>
      </form>

      {/* Optional: Show search results preview */}
      {searchResults.length > 0 && (
        <div className={styles.searchResultsPreview}>
          <h4>Search Results</h4>
          {searchResults.map((book) => (
            <div key={book.id} className={styles.searchResultItem}>
              <img 
                src={book.image} 
                alt={book.title} 
                className={styles.resultImage}
              />
              <div className={styles.resultDetails}>
                <h5>{book.title}</h5>
                <p>{book.author} | {book.genre}</p>
                <span>${book.price}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}