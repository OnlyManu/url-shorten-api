import styles from "./shorten.module.css"

export default function Shorten() {
    return (
        <div className={styles.container}>
            <form method="get" className={styles.form}>
                <input type="text" className={styles.ipt} placeholder="Shorten a link here..." />
                <button type="submit" className={styles.btn}>Shorten It!</button>
            </form>
            <div className={styles.result}>
                
            </div>
        </div>
    )
}