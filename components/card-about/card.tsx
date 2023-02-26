import Image from "next/image"
import styles from "./card.module.css"

interface IcardAboutProps {
    icon: string,
    title: string,
    description: string
}

export default function CardAbout({icon, title, description}: IcardAboutProps) {
    return (
        <div className={styles.container}>
            <div className={styles.icon_wrapper}>
                <Image
                    className={styles.icon}
                    src={icon}
                    width={40}
                    height={40}
                    alt=""
                />
            </div>
            <strong className={styles.title}>{ title }</strong>
            <p className={styles.description}>{ description }</p>
        </div>
    )
}