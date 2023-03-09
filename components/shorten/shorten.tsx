import { FormEvent, SyntheticEvent, useState } from "react"
import styles from "./shorten.module.css"
import utils from "../../styles/utils.module.css"

interface IshortenResult {
    link: string,
    shrtLink: string
}


export default function Shorten() {
    const [link, setLink] = useState<string>("")
    const [ShortenResultstate, setShortenResultState] = useState<Array<IshortenResult>>([])

    const shortenLink = async (event: SyntheticEvent) => {
        event.preventDefault()
        try {
            const test = await fetch(`https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html`).then((result) => {
                if (result.ok) {
                    return result
                }
            })
            console.log(test)
        } catch (error) {
            console.log(error)
        }
        
    }

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        const value: string = event.currentTarget.value;
        setLink(value)
    }

    return (
        <div className={styles.container}>
            <form method="get" className={styles.form} onSubmit={shortenLink}>
                <input type="text" className={utils.ipt} value={link} onChange={handleChange} placeholder="Shorten a link here..." />
                <button type="submit" className={utils.btn_form}>Shorten It!</button>
            </form>
            <div className={styles.results}>
                
            </div>
        </div>
    )
}