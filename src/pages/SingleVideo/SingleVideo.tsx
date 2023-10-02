import { useParams } from "react-router-dom"
import styles from "./SingleVideo.module.scss"
import Header from "../../containers/Header/Header"
import { ShareEmail, ShareName, ShareUrl } from "../../components/ShareInputs/ShareInputs"
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"
import Social from "../../components/socials/Social"
import facebook from "../../assets/images/Facebook svg.svg"
import whatsapp from "../../assets/images/whatsapp.svg"
import telegram from "../../assets/images/telegram.svg"
const SingleVideo = () => {
    const {productId} = useParams()
  return (
    <>
        <Header/>
        <section className={styles.video__container}>
            <div className={styles.top}>
                <span>{`Home / Recent Videos / ${productId}`}</span>
            </div>
            <div className={styles.video__details}>
                <div className={styles.share__name}><ShareName title={false}/></div>
                <VideoPlayer/>
                <div className={styles.inputs}>
                    <ShareUrl title={false}/>
                    <ShareEmail/>
                </div>
                <div className={styles.socials}>
                    <p className={styles.socials__title}>Share your video</p>
                    <div className={styles.socials__list}>
                        <Social url={facebook} text="Facebook"/>
                        <Social url={whatsapp} text='WhatsApp'/>
                        <Social url={telegram} text='Telegram'/>
                    </div>
                </div>
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
                </div>
        </section>
    </>
  )
}

export default SingleVideo