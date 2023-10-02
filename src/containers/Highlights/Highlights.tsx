import styles from './Highlights.module.scss'
import record from '../../assets/images/record.png'
import share from '../../assets/images/share.png'
import revist from '../../assets/images/revisit.png'
import video from '../../assets/images/VideoRepository.png'
const Highlights = () => {
  return (
    <section className={styles.highlights__sec}>
        <div className={styles.highlights__title}>
            <h2 ><b>Features</b></h2>
            <p >Key Highlights of our extension</p>
        </div>
        <div className={styles.highlights}>
            <div className={styles.points__list}>
                <div className={styles.point}>
                    <span className={styles.point__icon}>
                        <img src={record} alt="icon" />
                    </span>
                    <span className={styles.point__text}>
                        <h4>Simple Screen Recording</h4>
                        <p>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                    </span>
                </div>
                <div className={styles.point}>
                    <span className={styles.point__icon}>
                        <img src={share} alt="icon" />
                    </span>
                    <span className={styles.point__text}>
                        <h4>Simple Screen Recording</h4>
                        <p>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                    </span>
                </div>
                <div className={styles.point}>
                    <span className={styles.point__icon}>
                        <img src={revist} alt="icon" />
                    </span>
                    <span className={styles.point__text}>
                        <h4>Simple Screen Recording</h4>
                        <p>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                    </span>
                </div>
            </div>
            <div className={styles.img} style={{backgroundImage: `url('${video}')`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}}>
                
            </div>
        </div>
    </section>
  )
}

export default Highlights
