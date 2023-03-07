import styles from "./shorten.module.css"
import utils from "../../styles/utils.module.css"

export default function Shorten() {
    return (
        <div className={styles.container}>
            <form method="get" className={styles.form}>
                <input type="text" className={utils.ipt} placeholder="Shorten a link here..." />
                <button type="submit" className={utils.btn_form}>Shorten It!</button>
            </form>
            <div className={styles.result}>
                
            </div>
        </div>
    )
}