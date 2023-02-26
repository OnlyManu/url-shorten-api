import styles from "./get-started.module.css"
import utils from "../../styles/utils.module.css"

export default function GetStarted() {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading+" "+utils.headingMd}>Boost your links today</h2>
            <button className={styles.btn+" "+utils.btn}>Get Started</button>
        </div>
    )
}