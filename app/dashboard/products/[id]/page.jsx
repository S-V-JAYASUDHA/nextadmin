import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from "next/image"

const SingleProductpage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src="/noavatar.png" alt="" fill/>
            </div>
            Jaya
        </div>
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
            <label>Title</label>
            <input type="text" name="title" placeholder="Wings of fire"/>
            <label>Description</label>
            <textarea 
            type="text" 
            name="description" 
            placeholder="Wings of Fire is the autobiography of Dr. A.P.J. Abdul Kalam, co-authored by Arun Tiwari. It narrates Kalam's journey from his humble beginnings in Rameswaram to becoming a leading scientist and the 11th President of India. The book highlights his contributions to India's space and missile programs, emphasizing the values of hard work, dedication, and perseverance. Through personal anecdotes and reflections, 'Wings of Fire' serves as an inspiring testament to the power of dreams and the relentless pursuit of excellence."/>
            </form>
        </div>
      </div>
    )
  }
  
  export default SingleProductpage