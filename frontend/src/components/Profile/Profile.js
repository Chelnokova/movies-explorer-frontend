import "./Profile.css";
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import InfoToolTip from "../InfoToolTip/InfoToolTip";
import { patterns } from "../../utils/constants";
import Header from "../Header/Header";

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const [isSame, setIsSame] = useState(true);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  useEffect(() => {
    if (
      currentUser.name !== values.name ||
      currentUser.email !== values.email
    ) {
      setIsSame(false);
    } else {
      setIsSame(true);
    }
  }, [currentUser, values]);

  useEffect(() => {
    props.setResSearchSaveMovies("");
    props.setNullResSaveMovies(false);
  });

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name: values.name,
      email: values.email,
    });
  }

  return (
    <>
      <Header style={props.style} isLoggedIn={props.isLoggedIn} />
      <main className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__section">
            <label for="name" className="profile__label">
              Имя
            </label>
            <input
              id="name"
              name="name"
              type="text"
              minLength="2"
              maxLength="30"
              placeholder="Ваше имя"
              className="profile__input"
              onChange={handleChange}
              value={values.name}
              pattern={patterns.name}
            />
            <span className="profile__status-message">{errors.name}</span>
          </div>
          <div className="profile__section">
            <label for="email" className="profile__label">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Ваш Email"
              className="profile__input"
              onChange={handleChange}
              value={values.email}
              pattern={patterns.email}
            />
            <span className="profile__status-message">{errors.email}</span>
          </div>
          <InfoToolTip
            resStatus={props.resStatus}
            text="Данные успешно обновлены."
          />
          <button
            disabled={!isValid || isSame}
            type="submit"
            className={`profile__button-save ${
              !isValid || isSame ? "profile__button-save_inactive" : ""
            }`}
          >
            Редактировать
          </button>
          <Link onClick={props.signOut} to="/" className="profile__button-quit">
            Выйти из аккаунта
          </Link>
        </form>
      </main>
    </>
  );
}

export default Profile;
