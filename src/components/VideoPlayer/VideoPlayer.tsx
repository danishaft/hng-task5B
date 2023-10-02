
import styles from './VideoPlayer.module.scss'
// import videojs from ""
// import thum from '../../assets/images/profile-pic2.png'
// import { FC, useRef } from 'react';
// import React from 'react';

// interface IVideoPlayerProps {
//     options: videojs.PlayerOptions;
// }
// const initialOptions: videojs.PlayerOptions = {
//     controls: true,
//     fluid: true,
//     controlBar: {
//       volumePanel: {
//         inline: false
//       }
//     }
//   };
const VideoPlayer = () => {
    // console.log(intro)
    // const videoNode = useRef<HTMLVideoElement>();
    // const player = useRef<videojs.Player>();
  return (
    <div className={styles['video__player']}>
      <video controls>
        <source src='//vjs.zencdn.net/v/oceans.mp4' type='video/mp4'/>
        yur browser doesnt suuport
    </video>
    </div>
  )
}

export default VideoPlayer