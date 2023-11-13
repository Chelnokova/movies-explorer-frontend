import { Link } from "react-router-dom";
import icon from "../../images/icon-profile.svg";
import "./Navigation.css";
import MenuBurger from "../MenuBurger/MenuBurger";

function Navigation({
  colorIconProfile,
  toggleNavigation,
  isClicked,
  isLoggedIn,
}) {
  return (
    <>
      {!isLoggedIn ? (
        <nav className="navigation">
          <div className="navigation__login">
            <Link to="/signup" className="navigation__registration">
              Регистрация
            </Link>
            <Link to="/signin" className="navigation__button-login">
              Войти
            </Link>
          </div>
        </nav>
      ) : (
        <nav className="navigation">
          <div className="navigation__menu">
            <ul className="navigation__main">
              <li className="navigation__item">
                <Link to="/movies" className="navigation__link">
                  Фильмы
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/saved-movies" className="navigation__link">
                  Сохраненные фильмы
                </Link>
              </li>
            </ul>
            <Link to="/profile" className="navigation__profile">
              <p className="navigation__profile-text">Аккаунт</p>
              <div
                className="navigation__img-container"
                style={colorIconProfile}
              >
                <img
                  src={icon}
                  alt="Иконка профиля"
                  className="navigation__profile-img"
                />
              </div>
            </Link>
          </div>
          <MenuBurger
            isClicked={isClicked}
            toggleNavigation={toggleNavigation}
          />
        </nav>
      )}
    </>
  );
}

export default Navigation;
