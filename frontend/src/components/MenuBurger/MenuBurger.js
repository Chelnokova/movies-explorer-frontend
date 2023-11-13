import "./MenuBurger.css";
import { Link } from "react-router-dom";
import icon from "../../images/icon-profile.svg";

function MenuBurger({ toggleNavigation, isClicked }) {
  return (
    <div className={`menu-burger ${isClicked ? "menu-burger_active" : ""}`}>
      <div className="menu-burger__main">
        <button
          type="button"
          className="menu-burger__button-close"
          onClick={toggleNavigation}
        ></button>
        <ul className="menu-burger__items">
          <li className="menu-burger__item">
            <Link to="/" className="menu-burger__link">
              Главная
            </Link>
          </li>
          <li className="menu-burger__item">
            <Link to="/movies" className="menu-burger__link">
              Фильмы
            </Link>
          </li>
          <li className="menu-burger__item">
            <Link to="/saved-movies" className="menu-burger__link">
              Сохраненные фильмы
            </Link>
          </li>
        </ul>
        <Link to="/profile" className="menu-burger__profile">
          <p className="menu-burger__profile-text">Аккаунт</p>
          <div className="menu-burger__img-container">
            <img
              src={icon}
              alt="Иконка профиля"
              className="menu-burger__profile-img"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuBurger;
