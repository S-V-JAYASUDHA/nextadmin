import Card from "../ui/dashboard/card/card"
import Transaction from "../ui/dashboard/transactions/transactions"
import styles from "../ui/dashboard/dashboard.module.css"

const Dashboard = () =>{
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
            <div className={styles.cards}>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <Transaction/>           
            </div>           
        </div>

    )
}

export default Dashboard