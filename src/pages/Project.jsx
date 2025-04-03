import { useDispatch, useSelector } from "react-redux";
import { itemFon } from "../utils/exportimg"
import { useEffect } from "react";
import { getProject } from "../store/project/projectSlice";
import Loader from "../components/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";



const Project = () => {

    const { theme, project } = useSelector((state) => state.project);
    const { t } = useTranslation();

    const dispatch = useDispatch()

    useEffect(() => {
  AOS.init({ duration: 1000 });
      
     setTimeout(() => {
      dispatch(getProject())
     }, 1000);
   
      
     
      
    }, [dispatch, theme ] )
 
  return (
   <>
   <div className="container ">
   <div className="project__container-box">
          
      <section className={`main ${theme}`}>
     
               <div className="main__box">
                 <div className="main__box_left">
                   <h2 data-aos="zoom-in" className={`main__title ${theme}`}><span>#</span>{t("projects")}</h2>
                 </div>
                 <div className="main__box_right">           
                 </div>
               </div>
               {project ? <div className="main__grid_box">
                 { project.map((item) => (
                   <div data-aos="flip-left"
                   data-aos-easing="ease-out-cubic"
                   data-aos-duration="500"
                    key={item.id} className={`main__item ${theme}`}>
                   <img src={itemFon} alt="" className="main__prject_image" />
                   <ul className="main__project_list">
                     <li className={`main__project_list_text ${theme}`}>
                       HTML
                     </li>
                     <li className={`main__project_list_text ${theme}`}>
                       SCSS
                     </li>
                     <li className={`main__project_list_text ${theme}`}>
                       REACT
                     </li>
                   </ul>
                   <div className={`main__project_box ${theme}`}>
                     <h2 className={`project__name ${theme}`}>{item.name}</h2>
                     
                     <div className="porjects__link">
                       
                       <a href={item.homepage} target="blank" className={`project__link ${theme}`}>Live</a>
                       <a href={item.html_url} target="blank"  className={`project__link ${theme}`}>Github</a>
                     </div>
                   </div>
                 </div>
                 )) }
               </div> : <Loader/>}
             </section>
          </div>
   </div>
   </>
  )
}

export default Project