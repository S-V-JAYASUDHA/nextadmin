import styles from '../app/page.module.css'; 
import Image from 'next/image';
import Link from 'next/link';
function Bookslide(src,bookname,author,price) {
    return ( 
        <div className={styles.card}>
            <Image
              src= {src}
              alt={bookname}
              width={200}
              height={300}
              className={styles.image}
            />
            <p className={styles.author}>Author: {author}</p>
            <p className={styles.price}>Price: ${price}</p>
            <Link href="/book/1" className={styles.link}>View Details</Link>
          </div>
     );
}

export default Bookslide;