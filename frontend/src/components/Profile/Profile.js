import "./Profile.css";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <main className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <div className="profile__section">
          <label for="name" className="profile__label">
            Имя
          </label>
          <input
            id="name"
            type="text"
            minlength="2"
            maxlength="30"
            placeholder="Ваше имя"
            className="profile__input"
          />
        </div>
        <div className="profile__section">
          <label for="email" className="profile__label">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="Ваш Email"
            className="profile__input"
          />
        </div>
        <button type="submit" className="profile__button profile__button_save ">
          Редактировать
        </button>
        <Link to="/" className="profile__button profile__button_quit">
          Выйти из аккаунта
        </Link>
      </form>
    </main>
  );
}

export default Profile;
