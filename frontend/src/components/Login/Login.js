import React from "react";
import "./Login.css";
import Form from "../Form/Form";
import { patterns } from "../../utils/constants";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function Login(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    props.handleLogin({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <main className="login">
      <Form
        title="Рады видеть!"
        button="Войти"
        text="Ещё не зарегистрированы? "
        link="/signup"
        linktext="Регистрация"
        onSubmit={handleSubmit}
        isValid={isValid}
      >
        <label for="email" className="form__label">
          E-mail
          <input
            type="email"
            id="emailLog"
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
            id="passwordLog"
            name="password"
            required
            minLength="8"
            maxLength="12"
            placeholder="Введите пароль"
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

export default Login;
