import styles from "./nav-footer.module.css"

export interface LinkType {
    name: string,
    href: string
}

interface InavFooter {
    title: string,
    links: Array<LinkType>
}

export default function NavFooter({title, links}: InavFooter) {
    return (
        <div className={styles.container}>
            <span className={styles.title}>{title}</span>
            <nav className={styles.nav}>
                <ul className={styles.navlinks}>
                    {links.map((link, key) => (
                        <li className={styles.link} key={key}><a href={link.href}>{link.name}</a></li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}