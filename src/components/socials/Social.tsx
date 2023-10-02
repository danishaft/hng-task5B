
import styles from './Social.module.scss'
interface Social {
    url:  string,
    text: string
}
const Social = ({url, text}: Social) => {
  return (
    <a href="#" className={styles['social']}>
        <img src={url} alt={text} />
        {text}
    </a>
  )
}

export default Social