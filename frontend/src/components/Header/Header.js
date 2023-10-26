import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <header className="header" style={props.style}>
      <Link to="/" className="logo">
        <img src={logo} alt="Логотип сайта" />
      </Link>
      <div className="header__info">
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
