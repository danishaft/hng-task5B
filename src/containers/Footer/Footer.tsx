import Logo from "../../components/logo/Logo"
import styles from "./Footer.module.scss"
const Footer = () => {
  return (
    <footer>
        <div className={styles.footer}>
            <span className={styles.footer__logo}>
                <Logo/>
            </span>
            <nav>
                <div className={styles.footer__links}>
                    <p><b>Menu</b></p>
                    <ul className={styles.lists}>
                        <li>Home</li>
                        <li>Converter</li>
                        <li>How it Works</li>
                    </ul>
                </div>
                <div className={styles.footer__links}>
                    <p><b>About us</b></p>
                    <ul className={styles.lists}>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className={styles.footer__links}>
                    <p><b>Screen Record</b></p>
                    <ul className={styles.lists}>
                        <li>Browser Window</li>
                        <li>Desktop</li>
                        <li>Application</li>
                    </ul>
                </div>
            </nav>
        </div>
    </footer>
  )
}

export default Footer