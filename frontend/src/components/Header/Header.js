import React, { useState } from "react";
import logo from "../../images/logo.svg";
import burger from "../../images/burger.svg";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const [isClicked, setIsClicked] = useState(false);

  function toggleNavigation() {
    setIsClicked(!isClicked);
  }

  return (
    <header className="header" style={props.style}>
      <Link to="/" className="logo">
        <img src={logo} alt="Логотип сайта" />
      </Link>
      <div className="header__info">
        <button
          type="button"
          className={`header__menu-button ${
            !props.isloggedIn ? "header__menu-button_disactive" : ""
          }`}
          onClick={toggleNavigation}
          style={props.burgerColor}
        >
          <img alt="Иконка меню" src={burger} />
        </button>
        <Navigation
          isClicked={isClicked}
          toggleNavigation={toggleNavigation}
          colorIconProfile={props.colorIconProfile}
          isloggedIn={props.isloggedIn}
        />
      </div>
    </header>
  );
}

export default Header;
