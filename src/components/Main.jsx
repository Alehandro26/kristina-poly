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
            Кристина Поли <br /> <span>Москва / Ставрополь</span>
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
            <p>
              Модный фэшн-инфлюенсер, тренд-сеттер, персональный стилист
              имиджмейкер, преобразившая более 2000 счастливых клиентов,
              создатель подкаста «Скорая модная помощь», народный стилист
              программы «Модный приговор» на федеральном телевидении,
              радиоведущая на радио серебряный дождь, публиковалась в журналах
              Marie Claire, Собака, Whatever magazine (Paris).
            </p>
          </div>
        </div>
        <div className="main__image">
          <img className="main__foto" src="/img/kris.jpeg" alt="" />
        </div>
      </div>
      <div className="main__about" ref={mainText} id="main__about">
        <p>
          Модный фэшн-инфлюенсер, тренд-сеттер, персональный стилист
          имиджмейкер, преобразившая более 2000 счастливых клиентов, создатель
          подкаста «Скорая модная помощь», народный стилист программы «Модный
          приговор» на федеральном телевидении, радиоведущая на радио серебряный
          дождь, публиковалась в журналах Marie Claire, Собака, Whatever
          magazine (Paris).
        </p>
      </div>
    </section>
  );
}

export default Main;
