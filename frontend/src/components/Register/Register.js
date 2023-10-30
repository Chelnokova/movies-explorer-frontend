import "./Register.css";
import Form from "../Form/Form";
import { useState } from "react";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.handleRegister(name, email, password);

    setName("");
    setEmail("");
    setPassword("");
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
      >
        <label for="name" className="form__label">
          {" "}
          Имя
        </label>
        <input
          type="text"
          id="name"
          minlength="2"
          maxlength="30"
          required
          placeholder="Ваше Имя"
          className="form__input"
          value={name}
          onChange={handleChangeName}
        />
        <label for="email" className="form__label">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          required
          placeholder="Ваш Email"
          className="form__input"
          value={email}
          onChange={handleChangeEmail}
        />
        <label for="password" className="form__label">
          Пароль
        </label>
        <input
          type="password"
          id="password"
          minLength="6"
          maxLength="12"
          placeholder="Придумайте пароль"
          required
          className="form__input"
          value={password}
          onChange={handleChangePassword}
        />
      </Form>
    </main>
  );
}

export default Register;
