import { useRef } from "react";
import "./Main.scss";

function Main() {
  const mainButton = useRef();
  const mainText = useRef();

  function addMainText() {
    mainText.current.classList.toggle("main-text");
    console.log(mainButton);
  }

  return (
    <section className="main" id="aboutme">
      <h1 className="main__title">Стилист-имиджмейкер</h1>
      <div className="main__wrapper">
        <div className="main__text">
          <h2 className="main__text_title">
            Кристина Поли <br /> <span>Москва</span>
          </h2>
          <div className="main__text_wrapper">
            <p className="main__text_subtitle">
              Стилист, визажист и твой лучший друг в поиске собственного стиля
            </p>
            <div className="main__text_button" data-aos="zoom-in">
              <button
                className="main__text_link"
                onClick={addMainText}
                ref={mainButton}
              >
                Узнать больше
              </button>
            </div>
          </div>
          <div className="main__about-desk">
            <ul className="main__list-desk">
              <li className="main__list-desk_item">Модный фэшн-инфлюенсер;</li>
              <li className="main__list-desk_item">Тренд-сеттер;</li>
              <li className="main__list-desk_item">
                Персональный стилист имиджмейкер, преобразившая более 2000
                счастливых клиентов;
              </li>
              <li className="main__list-desk_item">
                Создатель подкаста «Скорая модная помощь»;
              </li>
              <li className="main__list-desk_item">
                Народный стилист программы «Модный приговор» на федеральном
                телевидении;
              </li>
              <li className="main__list-desk_item">
                Радиоведущая на радио серебряный дождь;
              </li>
              <li className="main__list-desk_item">
                Публиковалась в журналах Marie Claire, Собака, Whatever magazine
                (Paris).
              </li>
            </ul>
          </div>
        </div>
        <div className="main__image">
          <img className="main__foto" src="/img/kris.jpeg" alt="" />
        </div>
      </div>
      <div className="main__about" ref={mainText} id="main__about">
        <ul className="main__list">
          <li className="main__list_item">Модный фэшн-инфлюенсер;</li>
          <li className="main__list_item">Тренд-сеттер;</li>
          <li className="main__list_item">
            Персональный стилист имиджмейкер, преобразившая более 2000
            счастливых клиентов;
          </li>
          <li className="main__list_item">
            Создатель подкаста «Скорая модная помощь»;
          </li>
          <li className="main__list_item">
            Народный стилист программы «Модный приговор» на федеральном
            телевидении;
          </li>
          <li className="main__list_item">
            Радиоведущая на радио серебряный дождь;
          </li>
          <li className="main__list_item">
            Публиковалась в журналах Marie Claire, Собака, Whatever magazine
            (Paris).
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Main;
