import Instruction from '../../components/Instruction/Instruction'
import styles from './Works.module.scss'
import one from '../../assets/images/one.png'
import two from '../../assets/images/two.png'
import three from '../../assets/images/three.png'

const Works = () => {
  return (
    <section className={styles.works}>
        <h2>How it works</h2>
        <div className={styles.works__list}>
            <Instruction num={one} title='Record Screen' text='Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.'/>
            <Instruction num={two} title='Share Your Recording' text='We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.'/>
            <Instruction num={three} title='Learn Effortlessly' text='Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.'/>
        </div>
    </section>
  )
}

export default Works