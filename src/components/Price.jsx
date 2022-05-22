import "./Price.scss";

function Price({ title, subtitle, value, img, format }) {
  AOS.init({
    duration: 800,
    offset: 50,
    once: false,
  });

  return (
    <div className="price">
      <div className="price__wrapper">
        <div className="price__image">
          <img src={img} alt="" className="price__image_img" />
        </div>
        <div className="price__text">
          <h4 className="price__text_title">{title}</h4>
          {format && <span className="price__text_format">{format}</span>}
          <p className="price__text_subtitle">{subtitle}</p>
          <div className="price__flex">
            <span className="price__flex_value">{value}</span>
            <a
              href="https://wa.me/79282300555"
              className="price__flex_link"
              data-aos="zoom-in-right"
            >
              Записаться
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
