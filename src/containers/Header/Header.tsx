
import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import styles from "./header.module.scss"
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from "react";
import { useAuth } from "../../context/AuthContext"
import { BsChevronDown } from "react-icons/bs";
import profile from '../../assets/images/profile-circle.png'

const Header = () => {
    const [toggled, setToggled] = useState(false)
    console.log(toggled)
    const _authVal = useAuth()
  return (
    <header>
        <div className={styles.heading}>
            <div className={styles.first}>
                {!_authVal?.user &&
                    <div className={styles.hambuger}>
                        <Hamburger size={19} onToggle={toggled => {
                            if(toggled){
                                setToggled(true)
                            }else{
                                setToggled(false)
                            }
                        }}/>
                    </div>
                }
               <Logo/>
            </div>
            { !_authVal?.user && <ul className={styles.links}><li>Features</li><li>How it Works</li></ul>}
            <div className={styles.profile__mb}>
                {_authVal?.user ?
                    <><img src={profile}  alt="john mark" /><p>John mark</p><BsChevronDown /></>
                    : 
                    <Link to='/signup'>
                        Get Started.
                    </Link>
                }
            </div>
            
        </div>
    </header>
  )
}

export default Header