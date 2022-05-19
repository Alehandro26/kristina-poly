import "./Card.scss";

function Card({ title, item, item2, img }) {
  return (
    <div className="card">
      <div className="card__text">
        <h4 className="card__title">{title}</h4>
        <ul className="card__list">
          <li className="card__item">{item}</li>
          {item2 && <li className="card__item">{item2}</li>}
        </ul>
      </div>
      <div className="card__image">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Card;
