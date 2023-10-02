import Footer from "../../containers/Footer/Footer"
import Header from "../../containers/Header/Header"
import { useAuth } from "../../context/AuthContext"
import HomePage from "../HomePage/HomePage"
import {Navigate} from 'react-router-dom'

const PageContent = () => {
  const _authVal = useAuth()
  return (
    <>
        {_authVal?.user && <Navigate to={"/home"} replace={true}/>}
        <Header/>
        <HomePage/>
        <Footer/>
    </>
  )
}

export default PageContent