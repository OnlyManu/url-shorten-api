import styles from "./about.module.css"
import utils from "../../styles/utils.module.css"

import CardAbout from "../card-about/card"

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.text_bloc}>
                <h2 className={styles.heading+" "+utils.headingMd}>Advanced Statistics</h2>
                <p className={styles.description+" "+utils.txtMd}>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className={styles.cardlist}>
                <CardAbout
                    icon="/images/icon-brand-recognition.svg"
                    title="Brand Recognition"
                    description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
                />
                <CardAbout
                    icon="/images/icon-detailed-records.svg"
                    title="Detailed Records"
                    description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
                />
                <CardAbout
                    icon="/images/icon-fully-customizable.svg"
                    title="Fully Customizable"
                    description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
                />
            </div>
        </div>
    )
}