import {  useSelector } from "react-redux";
import { logoline, dots, avatar,  logologo, frame, imageavatar, discord, email,   greyson, airpods, totem } from "../utils/exportimg"
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";






const Home = () => {

  const { theme  } = useSelector((state) => state.project);
  const { t } = useTranslation();
 
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();


  }, [theme]);


 

  return (
    <>
      <div className="container">

        <section   className={`current ${theme}`}>
          <div className="current__box">
            <div className="current__box_left">
              <h1 data-aos="zoom-in" className={`current__title ${theme}`}>Fara <span>{t("web_designer")}</span> {t("and")} <span>{t("fronted_devoloper")}</span></h1>
              <p data-aos="zoom-in" className={`current__text ${theme}`}>{t("intro_text")}</p>
              <a data-aos="zoom-in" href="#contacts" className={`current__link ${theme}`}>{t("my_contacts")}</a>
            </div>
            <div data-aos="zoom-in-down" className="current__box_right">
              <div className="img__box">
                <img className="current__box_right_img" src={avatar} alt="" />
                <img src={logoline} alt="" className="logo__line" />
                <img src={dots} alt="" className="current__logo_nuts" />
              </div>
              <p className={`current__right_text ${theme}`}>{t("currently_working")}</p>
            </div>
          </div>
          <div data-aos="zoom-in"  className="current__text_box">
            <h2  className={`current__text_title ${theme}`}>{t("quote_title")}</h2>
            <p  className={`current__text_text ${theme}`}>{t("quote_author")}</p>
          </div>

          <div data-aos="fade-left" className={`decorative-box ${theme}`}></div>

        </section>
        <section data-aos="fade-up" data-aos-anchor-placement="top-bottom"  className={`main ${theme}`}>

          <div className="main__box">
            <div className="main__box_left">
              <h2 className={`main__title ${theme}`}><span>#</span>{t("projects")}</h2>
            </div>
            <div className="main__box_right">
              <Link to='/project' className={`main__link ${theme}`}>{t("view_all")}</Link>
            </div>
          </div>
          <div className="main__grid_box">
            
              <div data-aos="flip-left"  className={`main__item ${theme}`}>
              <img src={greyson} alt="" className="main__prject_image" />
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
                <h2 className={`project__name ${theme}`}>Greyson</h2>
                <p className={`project__text ${theme}`}>{t("Paris_style_shopping")}</p>
                <div className="porjects__link">
                  <a href="#" className={`project__link ${theme}`}>Figma</a>
                  <a href="https://farruxnuranov.github.io/Greyson/" target="blank" className={`project__link ${theme}`}>Live</a>
                  <a href="https://github.com/FarruxNuranov/Greyson" target="blank" className={`project__link ${theme}`}>Github</a>
                </div>
              </div>
            </div>
              <div data-aos="flip-left"   className={`main__item ${theme}`}>
              <img src={airpods} alt="" className="main__prject_image" />
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
              <div  className={`main__project_box ${theme}`}>
                <h2 className={`project__name ${theme}`}>Airpods</h2>
                <p className={`project__text ${theme}`}>{t("AirPods")}</p>
                <div className="porjects__link">
                  <a href="#" className={`project__link ${theme}`}>Figma</a>
                  <a href="https://farruxnuranov.github.io/airpods/#" target="blank"  className={`project__link ${theme}`}>Live</a>
                  <a href="https://github.com/FarruxNuranov/airpods/ " target="blank" className={`project__link ${theme}`}>Github</a>
                </div>
              </div>
            </div>
              <div data-aos="flip-left"  className={`main__item ${theme}`}>
              <img src={totem} alt="" className="main__prject_image" />
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
                <h2 className={`project__name ${theme}`}>TOTEMBO</h2>
                <p className={`project__text ${theme}`}>{t("World_watches")}</p>
                <div className="porjects__link">
                  <a href="#" className={`project__link ${theme}`}>Figma</a>
                  <a href="https://farruxnuranov.github.io/Totemboadaptive/" target="blank" className={`project__link ${theme}`}>Live</a>
                  <a href="https://github.com/FarruxNuranov/Totemboadaptive" target="blank" className={`project__link ${theme}`}>Github</a>
                </div>
              </div>
            </div>
            
            
       
          </div>
        </section>
        <section data-aos="fade-up" data-aos-anchor-placement="top-bottom"   className={`skills ${theme}`}>
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
        <section data-aos="fade-up" data-aos-anchor-placement="top-bottom"   className={`about ${theme}`}>
          <h2 className={`about__content-title ${theme}`}><span>#</span>{t("about")}</h2>
          <div className="about__box">
            <div className="about__content">
              <div className="about__content-text">
                <p className={`about__description ${theme}`}>{t("about__me")}</p>
                <p className={`about__description ${theme}`}>{t("about__me_two")}</p>
              </div>
            </div>
            <div className="about__img" >
              <img src={imageavatar} alt="" className="about__img-img" />
              <img src={dots} alt="" className="decor" />
              <img src={dots} alt="" className="decor2" />
            </div>
          </div>
        </section>
        <section  id="contacts"  className={`contacts ${theme}`}>
          <h2 className={`contacts__title ${theme}`}><span>#</span>{t("Contacts")}</h2>
          <div className="contacts__content">
            <p className={`contacts__description ${theme}`}>{t("Contacts__about")}</p>
            <div className={`contacts__media ${theme}`}>
              <h3 className={`contacts__media-title ${theme}`}>{t("Write__to")}</h3>
              <div className="contacts__list">
                <a href="#" className="contact">
                  <img src={discord} alt="" className="contacts__img" />
                  <div className={`contact__name ${theme}`}>chromecore1</div>
                </a>
                <a href="mailto:Farruxnuranov2001@gmail.com" className="contact">
                  <img src={email} alt="" className="contacts__img" />
                  <div className={`contact__name ${theme}`}>Farruxnuranov2001@gmail.com</div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default Home