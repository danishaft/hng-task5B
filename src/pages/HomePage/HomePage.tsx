import styles from './HomePage.module.scss'
import Hero from '../../containers/Hero/Hero'
import Highlights from '../../containers/Highlights/Highlights'
import Works from '../../containers/Works/Works'

const HomePage = () => {
  return (
    <div className={styles.home}>
      <Hero/>
      <Highlights/>
      <Works/>
    </div>
  )
}

export default HomePage