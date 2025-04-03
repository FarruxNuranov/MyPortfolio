import { useDispatch, useSelector } from 'react-redux';
import { logo, discord, figma, vector, line } from '../utils/exportimg';
import Burger from './Burger';
import { getTheme, toggleActive } from '../store/project/projectSlice';
import { Link } from 'react-router-dom';
import { setLanguage } from '../store/language/languageSlice';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

const Navbar = () => {
  const { active, theme } = useSelector((state) => state.project);
  const language = useSelector((state) => state.language.language);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleToggle = useCallback(() => {
    dispatch(getTheme());
  }, [dispatch]);

  const handleChange = useCallback((e) => {
    dispatch(setLanguage(e.target.value));
  }, [dispatch]);

  return (
    <nav className={`nav ${theme}`}>
      <div className="container">
        <div className="nav_box">
          <Link to="/" id="home" className={`nav_logo ${theme}`}>
            <img className="nav_logo_img" src={logo} alt="Company Logo" />
            FaraOff
          </Link>

          <div className="right_box">
            <ul className={`list_box ${theme} ${active ? 'active' : ''}`}>
              <li className="nav_box_list">
                <Link to="/" onClick={() => dispatch(toggleActive())} className={`nav_box_list_link ${theme}`}>
                  <span>#</span>{t("Home")}
                </Link>
              </li>
              <li className="nav_box_list">
                <Link to="/project" onClick={() => dispatch(toggleActive())} className={`nav_box_list_link ${theme}`}>
                  <span>#</span>{t("projects")}
                </Link>
              </li>
              <li className="nav_box_list">
                <Link to="/about" onClick={() => dispatch(toggleActive())} className={`nav_box_list_link ${theme}`}>
                  <span>#</span>{t("about")}
                </Link>
              </li>
              <select value={language} onChange={handleChange} className={`Language__select ${theme}`} aria-label="Выбор языка">
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>

              <div className="theme-toggle">
                <label htmlFor="themeToggle" className={`themeToggle ${theme} st-sunMoonThemeToggleBtn`}>
                  <input 
                    type="checkbox" 
                    id="themeToggle" 
                    className="themeToggleInput"
                    checked={theme === "dark"}
                    onChange={handleToggle}
                  />
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" stroke="none">
                    <mask id="moon-mask">
                      <rect x="0" y="0" width="20" height="20" fill="white"></rect>
                      <circle cx="11" cy="3" r="8" fill="black"></circle>
                    </mask>
                    <circle className="sunMoon" cx="10" cy="10" r="8" mask="url(#moon-mask)"></circle>
                    <g>
                      <circle className="sunRay sunRay1" cx="18" cy="10" r="1.5"></circle>
                      <circle className="sunRay sunRay2" cx="14" cy="16.928" r="1.5"></circle>
                      <circle className="sunRay sunRay3" cx="6" cy="16.928" r="1.5"></circle>
                      <circle className="sunRay sunRay4" cx="2" cy="10" r="1.5"></circle>
                      <circle className="sunRay sunRay5" cx="6" cy="3.1718" r="1.5"></circle>
                      <circle className="sunRay sunRay6" cx="14" cy="3.1718" r="1.5"></circle>
                    </g>
                  </svg>
                </label>
              </div>
            </ul>
            <Burger />
          </div>
        </div>
      </div>
      <div className="border_box">
        <img src={line} alt="Line" className="border__line" />
        <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="border__link">
          <img src={figma} alt="Figma" className="border__img" />
        </a>
        <a href="https://github.com/farruxnuranov/" target="_blank" rel="noopener noreferrer" className="border__link">
          <img src={vector} alt="Vector" className="border__img" />
        </a>
        <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="border__link">
          <img src={discord} alt="Discord" className="border__img" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
