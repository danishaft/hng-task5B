import { ShareEmail, ShareName, ShareUrl } from "../../components/ShareInputs/ShareInputs"
import Social from "../../components/socials/Social"
import styles from "./Landing.module.scss"
import facebook from "../../assets/images/Facebook svg.svg"
import whatsapp from "../../assets/images/whatsapp.svg"
import telegram from "../../assets/images/telegram.svg"
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"
import Header from "../../containers/Header/Header"
import Footer from "../../containers/Footer/Footer"
const LandingPage = () => {
  return (
    <>
      <Header/>
      <div className={styles['landing__page']}>
      <section className={styles['first__sec']}>
        <h1><b>Your video is ready!</b></h1><br />
        <div className={styles['all__inputs']}>
          <ShareName title/>
          <ShareEmail/>
          <ShareUrl title/>
          <div className={styles['socials']}>
            <p className={styles['socials__title']}>Share your video</p>
            <div className={styles['socials__list']}>
              <Social url={facebook}text="Facebook"/>
              <Social url={whatsapp} text='WhatsApp'/>
              <Social url={telegram} text='Telegram'/>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['second__sec']}>
        <VideoPlayer/>
        <div className={styles['transcribe']}>
          <h3><b>Transcript</b></h3>
          <select name="language">
            <option value="">English</option>
          </select>
          <div className={styles['transcript']}>
            <span>0.001</span>
            <article>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </article>
          </div>
          <div className={styles['transcript']}>
            <span>0.001</span>
            <article>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </article>
          </div>
          <div className={styles['transcript']}>
            <span>0.001</span>
            <article>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </article>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  )
}

export default LandingPage