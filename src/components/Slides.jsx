import "./Slides.scss";
import Slider from "react-slick";
import { HashLink as Link } from "react-router-hash-link";

function Slides() {
  const settings = {
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2400,
    swipe: false,
    touchMove: false,
  };

  return (
    <div className="slides" id="slides">
      <div className="slides__wrapper">
        <div className="slides__image">
          <Slider className="slides__mobile" {...settings}>
            <img
              src="/img/image.jpeg"
              alt="Слайд №1"
              className="slides__foto"
            />
            <img
              src="/img/image2.jpeg"
              alt="Слайд №2"
              className="slides__foto"
            />
            <img
              src="/img/image3.jpeg"
              alt="Слайд №3"
              className="slides__foto"
            />
          </Slider>
          <Slider className="slides__desktop" {...settings}>
            <img
              src="/img/slide-des.jpg"
              alt="Слайд №1"
              className="slides__foto"
            />
            <img
              src="/img/slide-des2.jpg"
              alt="Слайд №2"
              className="slides__foto"
            />
            <img
              src="/img/slide-des3.jpg"
              alt="Слайд №2"
              className="slides__foto"
            />
          </Slider>
        </div>
        <div className="slides__button">
          <Link
            to="#gallery"
            className="slides__link"
            data-aos="zoom-in"
            smooth={true}
          >
            Смотреть
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Slides;
