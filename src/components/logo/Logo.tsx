import styles from "./Logo.module.scss"
import logo from "../../assets/images/help_logo.svg"
import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
const Logo = () => {
  const _authVal = useAuth()
  const path = _authVal?.user ? '/home' : '/'
  return (
    <Link to={path}>
           <div className={styles.logo__bg}>
                    <img src={logo} alt="logo" />
                    <h1>HelpMeOut</h1>
            </div>
    </Link>
  )
}

export default Logo