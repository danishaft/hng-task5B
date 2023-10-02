import { object, string, } from 'yup';
import { useState } from "react"
import { Button1 } from "../buttons/Button"
import styles from "./ShareInputs.module.scss"
import { FiCopy } from "react-icons/fi";
import edit from "../../assets/images/edit.svg"
interface Props {
    title: boolean;
}
const ShareEmail = () => {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [isValid, setIsValid] = useState(false)

    const userSchema = object({
        email: string().email('Invalid email format').required('Email is required')
    })

    const handleChange = (e: any): void => {
        const {name, value} = e.target;
        setEmail(value)

        //validate form using yup
        userSchema
        .validate({[name]: value})
        .then(() => {
            setEmailError('')
            setIsValid(true)
        })
        .catch((err)=> {
            setEmailError(err.message); 
            setIsValid(false)
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(isValid){
            console.log('submitted')
            setEmail('')
        }else {
            console.error('form submission error')
        }
    }
  return (
    <div className={styles['share__email']}>
        <form onSubmit={handleSubmit} className={styles['form']}>
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder='enter email of receiver'
            />
            <div className={styles['btn']}>
             <Button1 text="Send" type="submit" color="#ffff" bgColor="#605C84" />
            </div>
        </form>
        {emailError && <div className={styles['errors']}>{emailError}</div>}
    </div>
  )
}

const ShareUrl = ({title}: Props) => {
    return (
        <>
            {title &&   <p className={styles['shareUrlTitle']}>Video Url</p>}
            <div className={styles['share__url']}>
                <p>https://www.helpmeout/Untitled_Video_20232509</p>
                <Button1 text="Send" type="submit" color="#120B48" bgColor="#ffff" border='yes'>
                    <FiCopy/>
                </Button1>
            </div>
        </>
    )
}

const ShareName = ({title}: Props) => {
    // const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState('Untitled_Video_20232509 ');

    const handleChange = (e: any) => {
        setInputValue(e.target.value)
    }
    return(
       <>
            {title && <label className={styles['name__label']} htmlFor="name">Name</label>}
            <div className={styles['share__name']}>
                <input type="text" value={inputValue} name='name' onChange={handleChange} />
                <img src={edit} alt="icon" />
            </div>
       </>
    )
}

export {ShareEmail, ShareUrl, ShareName}