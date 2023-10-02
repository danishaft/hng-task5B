
import Header from '../../containers/Header/Header'
import { Formik, Form, Field } from "formik"
import { RiSearchLine } from "react-icons/ri";
import styles from './VideoRepository.module.scss'
import VideoCard from '../../components/VideoCard/VideoCard';
import frame from '../../assets/images/video frame.png'

type State = {
  search: string;
};

const initialValues: State = {
  search: "",
}

const VideoRepository = () => {
  return (
    <>
    <Header/>
    <section className={styles.video__repo}>
      <span className={styles.title}>
        <h2>Hello, John Mark</h2>
        <p>Here are your recorded videos</p>
      </span>
      <div className={styles.search}>
        <Formik
          initialValues={initialValues}
          onSubmit={()=>console.log('rrr')}
        >
            <Form>
                <div className={styles.input}>
                  <RiSearchLine className={styles.icon}/>
                  <Field className={styles.field} name='search' type='text' placeholder='Search for a particular video'/>
                </div>
              </Form>
        </Formik>
      </div>
    </section>
    <section className={styles.repo__sec}>
      <div className={styles.repo__div}>
        <h3>
          Recent files
        </h3>
        <div className={styles.repo__container}>
          <VideoCard img={frame} name='How to create Facebook Ad listing' date='SEPTEMBER 23, 2023' to={`/home/recent/1`}/>
          {/* <VideoCard/> */}
          <VideoCard img={frame} name='How to create Facebook Ad listing' date='SEPTEMBER 23, 2023' to={`/home/recent/2`}/>
          <VideoCard img={frame} name='How to create Facebook Ad listing' date='SEPTEMBER 23, 2023' to={`/home/recent/3`}/>
        </div>
      </div>
    </section>
    </>
  )
}

export default VideoRepository