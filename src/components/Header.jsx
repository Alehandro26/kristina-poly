import { HashLink as Link } from "react-router-hash-link";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__flex">
          <Link className="header__logo" to="/#top" smooth={true}>
            <img src="/img/logo.svg" alt="" />
          </Link>
          <div className="header__button" id="button">
            <span className="menu-burger"></span>
            <span className="menu-burger"></span>
            <span className="menu-burger"></span>
          </div>
          <nav className="header__nav">
            <Link to="/#aboutme" smooth={true} className="header__nav_link">
              Обо мне
            </Link>
            <Link to="/#gallery" smooth={true} className="header__nav_link">
              Портфолио
            </Link>
            <Link to="price#top" className="header__nav_link">
              Услуги и стоимость
            </Link>
            <Link to="#footer" smooth={true} className="header__nav_link">
              Контакты
            </Link>
          </nav>
        </div>
      </div>
      <nav className="header__menu" id="popup">
        <ul className="header__menu_list">
          <li className="header__menu_item">
            <Link
              to="/#aboutme"
              smooth={true}
              className="header__menu_link"
              id="header__menu_link"
            >
              Обо мне
            </Link>
          </li>
          <li className="header__menu_item">
            <Link
              to="/#gallery"
              smooth={true}
              className="header__menu_link"
              id="header__menu_link"
            >
              Портфолио
            </Link>
          </li>
          <li className="header__menu_item">
            <Link
              to="price#top"
              className="header__menu_link"
              id="header__menu_link"
            >
              Услуги и стоимость
            </Link>
          </li>
          <li className="header__menu_item">
            <Link
              to="#footer"
              smooth={true}
              className="header__menu_link"
              id="header__menu_link"
            >
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
      <hr className="header__hr" />
    </header>
  );
}

export default Header;
