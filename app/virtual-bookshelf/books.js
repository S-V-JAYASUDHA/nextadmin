export const books = [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A novel that critiques the idea of the American Dream in the Jazz Age. Set in the summer of 1922, the story follows the mysterious millionaire Jay Gatsby and his obsession with Daisy Buchanan.',
      coverImage: '/book5.jpg',
      genre: 'Classic Literature',
      publishedYear: 1925,
      pages: 180
    },
    {
      id: '2',
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel set in a totalitarian society where critical thought is suppressed under a surveillance state. The story follows Winston Smith, a man struggling against the oppressive government of Oceania.',
      coverImage: '/book4.jpg',
      genre: 'Dystopian Fiction',
      publishedYear: 1949,
      pages: 328
    },
    {
      id: '3',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'A powerful exploration of racial injustice and moral growth in the American South. Told through the eyes of Scout Finch, the novel follows her father Atticus as he defends a black man falsely accused of a crime.',
      coverImage: '/book6.jpg',
      genre: 'Literary Fiction',
      publishedYear: 1960,
      pages: 281
    }
  ];
  
  export function getBookById(id) {
    return books.find(book => book.id === id);
  }