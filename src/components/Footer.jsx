import "./Footer.scss";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__wrapper">
        <div className="footer__flex">
          <nav className="footer__contact">
            <a
              href="https://instagram.com/kristinapoly?igshid=YmMyMTA2M2Y="
              className="footer__contact_link"
            >
              <img src="/img/inst.svg" alt="" />
            </a>
            <a
              href="https://wa.me/79282300555"
              className="footer__contact_link"
            >
              <img src="/img/whatsup.svg" alt="" />
            </a>
            <a
              href="https://t.me/@Kristinapoly"
              className="footer__contact_link"
            >
              <img src="/img/tg.svg" alt="" />
            </a>
          </nav>
          <div className="footer__adress">
            <h5>Москва</h5>
          </div>
        </div>

        <nav className="footer__menu">
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/#top" smooth={true} className="footer__link">
                Домой
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/#aboutme" smooth={true} className="footer__link">
                Обо мне
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/#gallery" smooth={true} className="footer__link">
                Портфолио
              </Link>
            </li>
            <li className="footer__item">
              <Link to="price#top" className="footer__link">
                Услуги и стоимость
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <a href="uvarov-developer.ru" target="_blank" className="footer__created">
        <h5>
          Web site created by <br />
          <span>Alexander Uvarov</span>
        </h5>
      </a>
    </footer>
  );
}

export default Footer;
