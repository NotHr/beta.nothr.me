import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <h2>Harshith reddy</h2>
        <ul>
          <li><a href="">Notes</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">GitHub</a></li>
        </ul>
      </nav>
      <div className={styles.heading}>
        <h1>Hi 👋, I am Harshith!</h1>
        <p>I am an open-source Enthusists who loves to contribute to open-source projects</p>
      </div>
    </main>
  )
}
