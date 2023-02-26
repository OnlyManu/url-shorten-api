import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Navbar from '../components/navbar/navbar'
import Hero from '../components/hero/hero'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Mentor | Shortly URL shortening API Challenge</title>
        <meta name="description" content="A FrontEnd Mentor Challenge" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>

      <header className={styles.header}>
        <Navbar />
        <Hero />
      </header>

      <main className={styles.main}>
        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
