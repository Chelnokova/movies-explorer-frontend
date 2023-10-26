import "./MoviesCard.css";
import img from "../../images/movie-img.jpg";

function MoviesCard() {
  return (
    <li className="card">
      <article className="card__info">
        <h2 className="card__title">В погоне за Бенкси</h2>
        <p className="card__time">0ч 42м</p>
      </article>
      <img className="card__img" src={img} alt="В погоне за Бенкси" />
      <button className="card__save-button">Сохранить</button>
    </li>
  );
}

export default MoviesCard;
