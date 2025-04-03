import { useSelector } from "react-redux";
import { dots,  frame,  imageavatar, logologo, } from "../utils/exportimg"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const About = () => {

    const { theme  } = useSelector((state) => state.project);
    const { t } = useTranslation();
useEffect(() => {
  AOS.init({ duration: 1000 });
  
}, [theme])

    
    
  return (
    <>
    
     <div className="container">
        <div className="about__header">   
     <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" id="" className={`about ${theme}`}>
              <h2 className={`about__content-title ${theme}`}><span>#</span>about-me</h2>
              <div className="about__box">
                <div className="about__content">
                  <div className="about__content-text">
                    <p className={`about__description ${theme}`}>{t("about_fara")}</p>
                    <p className={`about__description ${theme}`}>{t("about_fara_two")}</p>
                    
                  </div>
                </div>
                <div className="about__img" >
                  <img src={imageavatar} alt="" className="about__img-img" />
                  <img src={dots} alt="" className="decor" />
                  <img src={dots} alt="" className="decor2" />
                </div>
                
              </div>
            </section>
            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" className={`skills ${theme}`}>
          <h2 className={`skills__title  ${theme}`}><span>#</span>{t("Skills")}</h2>
          <div className="skills__content">
            <div className="skills__illustrations illustrations">
              <img src={logologo} alt="" className="illustrations__logo" />
              <img src={frame} alt="" className="skills__frame_one" />
              <img src={frame} alt="" className="skills__frame_two" />
            </div>
            <div className="skills__list">
              <div className={`skill__block  ${theme}`}>
                <div className={`skill__name  ${theme}`}>{t("Languages")}</div>
                <ul className="skill__block_list">
                  <li className={`skill__block_skill ${theme}`}>JavaScript</li>
                  
                </ul>
              </div>
              <div className={`skill__block  ${theme}`}>
                <div className={`skill__name  ${theme}`}>{t("Working_with")}</div>
                <ul className="skill__block_list">
                  <li className={`skill__block_skill ${theme}`}>HTML</li>
                  <li className={`skill__block_skill ${theme}`}>CSS</li>
                  <li className={`skill__block_skill ${theme}`}>SCSS</li>
                  <li className={`skill__block_skill ${theme}`}>REACT</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
 
        </div>
     </div>
    </>
  )
}

export default About