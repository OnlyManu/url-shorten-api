import Image from "next/image"
import styles from "./navbar.module.css"

export default function Navbar() {
    return (
        <div className={styles.container}>
            <Image
                src={"/images/logo.svg"}
                className={styles.logo}
                width={121}
                height={33}
                priority={true}
                alt=""
            />
            <div className={styles.navigation}>
                <nav className={styles.nav}>
                    <ul className={styles.navlinks}>
                        <li className={styles.link}><a href="#">Features</a></li>
                        <li className={styles.link}><a href="#">Pricing</a></li>
                        <li className={styles.link}><a href="#">Resources</a></li> 
                    </ul>
                </nav>
                <div className={styles.action_buttons}>
                    <button className={styles.btn_login}>Login</button>
                    <button className={styles.btn_signup}>Sign Up</button>
                </div>
            </div>
            <button className={styles.btn_burger} />
        </div>
    )
}