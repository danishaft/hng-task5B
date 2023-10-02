import styles from './Instruction.module.scss'
import recording from '../../assets/images/recording.png'

interface Props{
    num: string;
    title: string;
    text: string;
}

const Instruction = ({num, title, text}: Props) => {

  return (
    <div className={styles.instruction}>
        <div className={styles.num}>
            <img src={num} alt={text}/>
        </div>
        <div className={styles.middle}>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
        <div>
            <img src={recording} alt="recording" />
        </div>
    </div>
  )
}

export default Instruction