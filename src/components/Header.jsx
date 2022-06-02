import { useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Header.scss";

function Header() {
  const body = document.body;
  const popupRef = useRef();
  const buttonRef = useRef();
  const buttonContactsRef = useRef();
  const contactsRef = useRef();

  function buttonBurger() {
    buttonRef.current.classList.toggle("open");
    popupRef.current.classList.toggle("popup");
    body.classList.toggle("scroll");
    contactsClose();
  }

  function buttonBurgerExit() {
    buttonRef.current.classList.remove("open");
    popupRef.current.classList.remove("popup");
    body.classList.remove("scroll");
  }

  function contactsOpen() {
    buttonContactsRef.current.classList.toggle("active");
    contactsRef.current.classList.toggle("active");
  }

  function contactsClose() {
    buttonContactsRef.current.classList.remove("active");
    contactsRef.current.classList.remove("active");
  }

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__flex">
          <Link
            className="header__logo"
            to="/#top"
            smooth={true}
            onClick={buttonBurgerExit}
          >
            <img src="/img/logo.svg" alt="" />
          </Link>
          <div
            className="header__button"
            ref={buttonRef}
            onClick={buttonBurger}
            id="button"
          >
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
      <nav className="header__menu" ref={popupRef} id="popup">
        <div className="header__menu_bgr" onClick={buttonBurgerExit}></div>
        <ul className="header__menu_list">
          <li className="header__menu_item" onClick={buttonBurgerExit}>
            <Link
              to="/#aboutme"
              smooth={true}
              className="header__menu_link"
              id="header__menu_link"
            >
              Обо мне
            </Link>
          </li>
          <li className="header__menu_item" onClick={buttonBurgerExit}>
            <Link
              to="/#gallery"
              smooth={true}
              className="header__menu_link"
              id="header__menu_link"
            >
              Портфолио
            </Link>
          </li>
          <li className="header__menu_item" onClick={buttonBurgerExit}>
            <Link
              to="price#top"
              className="header__menu_link"
              id="header__menu_link"
            >
              Услуги и стоимость
            </Link>
          </li>
          <li className="header__menu_item">
            <div
              className="header__menu_link link-flex"
              id="header__menu_link"
              ref={buttonContactsRef}
              onClick={contactsOpen}
            >
              Контакты{" "}
              <span>
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.97637 5.07191L9.33367 0.7146L9.95239 1.33332L5.28573 5.99999L4.66701 5.99998L0.000340435 1.33332L0.61906 0.714599L4.97637 5.07191Z"
                    fill="#424242"
                  />
                </svg>
              </span>
            </div>
          </li>
        </ul>
        <div className="header__hidden-item" ref={contactsRef}>
          <a
            href="https://instagram.com/kristinapoly?igshid=YmMyMTA2M2Y="
            className="header__contact-link"
            onClick={buttonBurgerExit}
          >
            <img src="/img/inst.svg" alt="" className="header__contact-image" />
          </a>
          <a
            href="https://wa.me/79282300555"
            className="header__contact-link"
            onClick={buttonBurgerExit}
          >
            <img
              src="/img/whatsup.svg"
              alt=""
              className="header__contact-image"
            />
          </a>
          <a
            href="https://t.me/@Kristinapoly"
            className="header__contact-link"
            onClick={buttonBurgerExit}
          >
            <img src="/img/tg.svg" alt="" className="header__contact-image" />
          </a>
        </div>
      </nav>
      <hr className="header__hr" />
    </header>
  );
}

export default Header;
