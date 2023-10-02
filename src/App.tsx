import Auth from "./pages/Auth/Auth"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import PageContent from "./pages/PageContent/PageContent"
import VideoRepository from "./pages/VideoRepository/VideoRepository"
import SingleVideo from "./pages/SingleVideo/SingleVideo"
import LandingPage from "./pages/LandingPage/LandingPage"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Auth/>}/>
        <Route path="/" element={<PageContent/>}/>
        <Route path="/home" element={<VideoRepository/>}/>
        <Route path="/home/recent/:videoId" element={<SingleVideo/>}/>
        <Route path="/record/13e3" element={<LandingPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
