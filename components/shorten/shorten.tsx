import { FormEvent, MouseEvent, SyntheticEvent, useState } from "react"
import styles from "./shorten.module.css"
import utils from "../../styles/utils.module.css"

interface IshortenResult {
    link: string,
    shrtLink: string,
    clicked: boolean
}


export default function Shorten() {
    const [loadingState, setLoadingState] = useState<boolean>(false)
    const [formErrorState, setFormErrorState] = useState<boolean>(false)
    const [link, setLink] = useState<string>("")
    const [ShortenResultstate, setShortenResultState] = useState<Array<IshortenResult>>([])

    const handleChange = (event: FormEvent<HTMLInputElement>): void => {
        const value: string = event.currentTarget.value;
        setLink(value)
        if (formErrorState && value !== "") {
            setFormErrorState(false)
        }
    }

    
    const shortenLink = async (event: SyntheticEvent): Promise<void> => {
        event.preventDefault()
        setLoadingState(true)
        if (link !== "") {
            try {
                const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`).then((result) => {
                    if (result.ok) {
                        return result.json()
                    }
                })

                const shortenResult: IshortenResult = {
                    link: link,
                    shrtLink: response.result.short_link as string,
                    clicked: false
                }

                setShortenResultState(state => [shortenResult, ...state])
                setLink("")
            } catch (error) {
                console.log(error)
            }
        } else {
            setFormErrorState(true)
        }
        setLoadingState(false)
    }

    const copyLink = async (event: MouseEvent<HTMLButtonElement>, linkIndex: number): Promise<void> => {
        let currentShortenResultState: Array<IshortenResult> = [...ShortenResultstate]
        
        if (!currentShortenResultState[linkIndex].clicked) {
            currentShortenResultState[linkIndex].clicked = true
            setShortenResultState(currentShortenResultState)    
        }

        
        await navigator.clipboard.writeText(event.currentTarget.value)
    }

    return (
        <div className={styles.container}>
            <form method="post" className={styles.form} onSubmit={shortenLink}>
                <div className={utils.ipt_group}>
                    <input type="text" className={formErrorState ? utils.ipt+" "+utils.ipt_error : utils.ipt} value={link} onChange={handleChange} placeholder="Shorten a link here..." aria-label="Link" />
                    {formErrorState && <span className={utils.ipt_error_message}>Please add a link</span>}
                </div>
                <button type="submit" className={utils.btn_form}>Shorten It!</button>
            </form>
            {loadingState && (
                <div className={styles.loading}>
                    <div className={styles.spinner}></div>
                </div>
            )}
            <div className={styles.results}>
                {ShortenResultstate.map((shortenResult, index) => (
                    <div key={index} className={styles.result}>
                        <div className={styles.links}>
                            <span className={styles.link}>{ shortenResult.link }</span>
                            <span className={styles.shrt_link}>{ shortenResult.shrtLink }</span>
                        </div>
                        <button className={shortenResult.clicked ? utils.btn_copy + " " + utils.btn_copy_clicked : utils.btn_copy} value={shortenResult.shrtLink} onClick={async (event) => { copyLink(event, index) }}>
                            {shortenResult.clicked ? "Copied!" : "Copy"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}