import { Navigate, Route,  Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import "./scss/main.scss";
import Project from "./pages/Project";
import About from "./pages/About";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initTheme } from "./store/project/projectSlice";
import ScrollToTop from "./components/ScrollToTop";




function App() {
  const {  theme } = useSelector((state) => state.project);
const dispatch = useDispatch()




useEffect(() => {
dispatch(initTheme())
}, [dispatch])


  useEffect(() => {
    if (theme == 'dark') {
      document.body.classList.add(`light-theme`);
      document.body.classList.remove("dark-theme");
    } if(theme == 'light') {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    }
    
  }, [theme]);

  return (
    <>
    
     <Navbar/>
     <ScrollToTop/>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/project" element={<Project/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="*" element={<Navigate to="/" replace />} />
     </Routes>
     
     <Footer/>
    </>
  )
}

export default App
