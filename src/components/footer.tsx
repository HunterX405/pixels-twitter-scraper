import Link from "next/link"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <a href="https://github.com/HunterX405/pixels-twitter-scraper">GitHub@HunterX405/pixels-twitter-scraper</a>
        </li>
      </ul>
    </footer>
  )
}
