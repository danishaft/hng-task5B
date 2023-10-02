import styles from './VideoCard.module.scss' 
import { IoLinkOutline } from "react-icons/io5";
import { CgMoreVertical } from "react-icons/cg";
import { Link } from 'react-router-dom';

interface VideoCard {
    img: string;
    name: string;
    date: string;
    to: string;
}
const VideoCard = ({img, name, date, to}: VideoCard) => {
  return (
    <Link to={to}>
        <figure className={styles.card}>
            <img src={img} alt={name} />
            <figcaption>
                <div className={styles.top}>
                    <h3>{name}</h3>
                    <IoLinkOutline/>
                    <CgMoreVertical/>
                </div>
                <p>{date}</p>
            </figcaption>
        </figure>
    </Link>
  )
}

export default VideoCard