import { Link } from "react-router-dom";
// import icon from "../../images/icon-profile.svg";
// import burger from "../../images/burger.svg";
import "./Navigation.css";

function Navigation() {
  return (
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
    // <nav className="navigation">
    //   <img className="navigation__icon" alt="Иконка меню" src={burger} />
    //   <div className="navigation__overlay">
    //     <button type="button" className="navigation__button-close"></button>
    //     <ul className="navigation__main">
    //       <li className="navigation__item">
    //         <Link to="" className="navigation__link">
    //           Фильмы
    //         </Link>
    //       </li>
    //       <li className="navigation__item">
    //         <Link to="" className="navigation__link">
    //           Сохраненные фильмы
    //         </Link>
    //       </li>
    //     </ul>
    //     <Link to="" className="navigation__profile">
    //       <p className="navigation__profile-text">Аккаунт</p>
    //       <div className="navigation__img-container">
    //         <img
    //           src={icon}
    //           alt="Иконка профиля"
    //           className="navigation__profile-img"
    //         />
    //       </div>
    //     </Link>
    //   </div>
    // </nav>
  );
}

export default Navigation;
