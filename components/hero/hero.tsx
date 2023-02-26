import Image from "next/image"
import styles from "./hero.module.css"

export default function Hero() {
    return (
        <div className={styles.container}>
            <Image
                className={styles.illustration}
                src={"/images/illustration-working.svg"}
                width={733}
                height={482}
                alt=""
                priority={true}
            />
            <div className={styles.text}>
                <div className={styles.text_bloc}>
                    <h1 className={styles.heading}>More than just shorter links</h1>
                    <p className={styles.description}>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                </div>
                <button className={styles.btn_getstarted}>Get Started</button>
            </div>
        </div>
    )
}