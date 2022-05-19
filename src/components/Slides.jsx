import "./Slides.scss";
import Slider from "react-slick";
import { HashLink as Link } from "react-router-hash-link";

function Slides() {
  const settings = {
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2400,
  };

  return (
    <div className="slides" id="slides">
      <div className="slides__wrapper">
        <div className="slides__image">
          <Slider {...settings}>
            <img src="/img/image.jpeg" alt="" className="slides__foto" />
            <img src="/img/image2.jpeg" alt="" className="slides__foto" />
            <img src="/img/image3.jpeg" alt="" className="slides__foto" />
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
