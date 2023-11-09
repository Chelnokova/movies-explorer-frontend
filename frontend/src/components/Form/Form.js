import "./Form.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import InfoToolTip from "../InfoToolTip/InfoToolTip";

function Form({
  title,
  button,
  text,
  link,
  linktext,
  children,
  onSubmit,
  isValid,
  textError,
  resStatus,
  customClass,
}) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <Link to="/" className="logo logo_start">
        <img src={logo} alt="Логотип сайта" />
      </Link>
      <h1 className="form__title">{title}</h1>
      <div className="form__container">{children}</div>
      <InfoToolTip
        text={textError}
        resStatus={resStatus}
        customClass={customClass}
      />
      <button
        disabled={!isValid ? true : false}
        type="submit"
        className={`form__button ${!isValid ? "form__button_inactive" : ""}`}
      >
        {button}
      </button>
      <p className="form__text">
        {text}
        <Link className="form__link" to={link}>
          {linktext}
        </Link>
      </p>
    </form>
  );
}

export default Form;
