import "./Rewievs.scss";
import Slider from "react-slick";

function Rewievs() {
  const setting = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3400,
    fade: true,
    lazyLoad: true,
  };
  return (
    <section className="rewievs">
      <div className="rewievs__wrapper">
        <div className="rewievs__text">
          <h2 className="rewievs__title">Отзывы</h2>
        </div>
        <div className="rewievs__slides">
          <div className="rewievs__slides_wrapper">
            <div className="rewievs__slide rewiev">
              <img src="/img/phone.png" alt="" className="rewiev__wrapper" />
              <div className="rewiev__images">
                <Slider {...setting}>
                  <img src="/img/rewiev.jpeg" alt="" />
                  <img src="/img/rewiev2.jpeg" alt="" />
                  <img src="/img/rewiev3.jpeg" alt="" />
                  <img src="/img/rewiev4.jpeg" alt="" />
                  <img src="/img/rewiev5.jpeg" alt="" />
                  <img src="/img/rewiev6.jpeg" alt="" />
                  <img src="/img/rewiev7.jpeg" alt="" />
                  <img src="/img/rewiev8.jpeg" alt="" />
                </Slider>
              </div>
            </div>
          </div>
          <div className="rewievs__subtitle">
            <p className="rewievs__subtitle_text">
              Стилист - это человек, который помогает создать имидж, для того,
              чтобы производить правильное впечатление, быстрее достигать
              продвижения по карьерной лестнице, наладить личную жизнь,
              экономить время и деньги! Благодаря работе со стилистом вы
              получаете лучшую версию себя. У вас появляются готовые решения что
              и с чем сочетать и у вас никогда не возникнет вопроса: «Что мне
              надеть?»
              <br /> Ведь гардероб - это образ жизни!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rewievs;
