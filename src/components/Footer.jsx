import { useSelector } from "react-redux"
import { discord, figma, logo, vector } from "../utils/exportimg"
import { useTranslation } from "react-i18next";


const Footer = () => {

const { theme } = useSelector((state) => state.project);
const { t } = useTranslation();

  return (
    <>
    <footer className={`footer ${theme}`}>
        <div className="container">
            <div className="footer__inner">
                <div className="footer__info">
                    <div className="footer__header">
                        <div className="footer__logo">
                            <img src={logo} alt="" className="footer__img" />
                            <h2 className={`footer__logo-name ${theme}`}>FaraOff</h2>
                        </div>
                        <a href="mailto:Farruxnuranov2001@gmail.com" className={`footer__email ${theme}`}>Farruxnuranov2001@gmail.com</a>
                    </div>
                         <p className={`footer__description ${theme}`}><span>{t("fronted_devoloper")}</span> {t("from_Tashkent")}</p>
                </div>
                <div className="footer__media">
                    <div className={`footer__title ${theme}`}>Media</div>
                    <div className="footer__list">
                      <a className="media" href="https://www.figma.com/">
                        <img src={figma} alt="figma" className="media__icon" />
                      </a>
                      <a className="media" href="https://github.com/farruxnuranov/">
                        <img src={vector} alt="github" className="media__icon" />
                      </a>
                      <a className="media" href="https://discord.com/">
                        <img src={discord} alt="discord" className="media__icon" />
                      </a>
                    </div>
                </div>
            </div>
                <div className={`footer__copyright ${theme}`}>{t("Kopyright")}</div>
        </div>
    </footer>
    </>
  )
}

export default Footer