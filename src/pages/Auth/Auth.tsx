import {auth, googleProvider} from '../../Config/firebaseConfig'
import { createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import { Formik, Form, Field,ErrorMessage } from "formik"
import {FC, useState} from "react"
import * as Yup from 'yup'
import styles from './Auth.module.scss'
import Logo from "../../components/logo/Logo";
import facebook from "../../assets/images/Facebook svg.svg"
import google from "../../assets/images/Google svg.png"
import { useNavigate } from "react-router-dom"


type State = {
  email: string;
  password: string;
};

const initialValues: State = {
  email: "",
  password: ""
}
const validationSchema = Yup.object({
  email:Yup.string().email("invalid email").required("required"),
  password: Yup.string().required("required"),
});

const Auth:FC = () => {
  const [errors, setErrors] = useState<boolean>(false)
  const navigate = useNavigate()
  const onSubmit = (values: State, submittingObject: any) => {
    submittingObject.resetForm()
    console.log(values)
    signUp(values)
  }

  const signInWithGoogle = async () => {
    try{
      await signInWithPopup(auth, googleProvider)
      navigate("/home")
    }catch(err){
      console.log(err)
    }
  }

  async function signUp(values: State ){
    console.log(values)
    try{
        await createUserWithEmailAndPassword(auth, values!.email, values!.password)
        navigate("/home")
        console.log(values)
    }catch(error) {
        console.error('Error:', error)
        console.log(error)
        setErrors(prev => !prev)
    }
}
  return (
    <section className={styles.auth}>
      <div className={styles.logo}>
        <Logo/>
      </div>
      <div className={styles.main__auth}>
        <h2><b>Log in or Sign up</b></h2>
        <p>Join millions of others in sharing successful <br /> moves on HelpMeOut.</p>
        <div className={styles.btn} onClick={signInWithGoogle}>
          <img src={google} alt="icon" />
          Continue with Google
        </div>
        <div  className={styles.btn}>
        <img src={facebook} alt="icon" />
          Continue with Facebook
        </div>
        <div className={styles.divider}>
          <div className={styles.lines}></div>
          <span>or</span>
          <div className={styles.lines}></div>
        </div>

        {/* TODO:create a form with formik  */}
        <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {(formik)=>{
                    return(
                        <Form>
                            <div className={styles.input}>
                                <label htmlFor="email">Email</label>
                                <Field className={styles.field} type="email" name='email' placeholder="Enter your email address"/>
                                <ErrorMessage name="email" component="div"/>
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="password">Password</label>
                                <Field className={styles.field} type="password" name='password' placeholder="Enter your Password"/>
                                <ErrorMessage name="password" component="div"/>
                            </div>
                            {
                                errors ? <p>invalid credentials</p> : ''
                            }
                            <button className={styles.signup__btn} type="submit" disabled={!formik.isValid || formik.isSubmitting}>Sign Up</button>
                        </Form>
                    )
                }}
            </Formik>
      </div>
    </section>
  )
}

export default Auth