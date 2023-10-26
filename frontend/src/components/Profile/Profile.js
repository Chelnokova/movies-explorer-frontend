import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
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
        <div className="profile__line"></div>
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
        <button type="button" className="profile__button profile__button_quit">
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
}

export default Profile;
