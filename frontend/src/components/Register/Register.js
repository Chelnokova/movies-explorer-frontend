import "./Register.css";
import Form from "../Form/Form";

function Register() {
  return (
    <main className="register">
      <Form
        title="Добро пожаловать!"
        button="Зарегистрироваться"
        text="Уже зарегистрированы? "
        link="/signin"
        linktext="Войти"
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
        />
      </Form>
    </main>
  );
}

export default Register;
