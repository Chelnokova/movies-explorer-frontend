import React from "react";
import "./Register.css";
import Form from "../Form/Form";
import { patterns } from "../../utils/constants";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function Register(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    props.handleRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  return (
    <main className="register">
      <Form
        title="Добро пожаловать!"
        button="Зарегистрироваться"
        text="Уже зарегистрированы? "
        link="/signin"
        linktext="Войти"
        onSubmit={handleSubmit}
        isValid={isValid}
      >
        <label for="name" className="form__label">
          Имя
          <input
            type="text"
            id="nameReq"
            name="name"
            minLength="2"
            maxLength="30"
            required
            placeholder="Ваше Имя"
            className="form__input"
            onChange={handleChange}
            value={values.name}
            pattern={patterns.name}
          />
          <span className="form__error-message">{errors.name}</span>
        </label>
        <label for="email" className="form__label">
          E-mail
          <input
            type="email"
            id="emailReq"
            name="email"
            required
            placeholder="Ваш Email"
            className="form__input"
            value={values.email}
            onChange={handleChange}
            pattern={patterns.email}
          />
          <span className="form__error-message">{errors.email}</span>
        </label>
        <label for="password" className="form__label">
          Пароль
          <input
            type="password"
            id="passwordReq"
            name="password"
            minLength="8"
            maxLength="12"
            placeholder="Придумайте пароль"
            required
            className="form__input"
            value={values.password}
            onChange={handleChange}
          />
          <span className="form__error-message">{errors.password}</span>
        </label>
      </Form>
    </main>
  );
}

export default Register;
