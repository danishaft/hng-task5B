import {  Button2 } from '../../components/buttons/Button'
import styles from './Hero.module.scss'
import { BsArrowRight } from "react-icons/bs";
import img from '../../assets/images/Hero section.png'

const Hero = () => {
  return (
    <section className={styles['hero']}>
        <div className={styles['hero__text']}>
            <h1>Show Them <br /> Don’t Just Tell</h1>
            <p>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
            <Button2 text='Install HelpMeOut' type='button' color='#fff' bgColor='#120B48' reverse='yes'>
                <BsArrowRight />
            </Button2>
        </div>
        <div className={styles.hero__img}>
            <img src={img} alt="hero image" />
        </div>
    </section>
  )
}

export default Hero