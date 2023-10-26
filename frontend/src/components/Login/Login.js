import "./Login.css";
import Form from "../Form/Form";

function Login() {
  return (
    <section className="login">
      <Form
        title="Рады видеть!"
        button="Войти"
        text="Ещё не зарегистрированы? "
        link="/signup"
        linktext="Регистрация"
      >
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
          placeholder="Введите пароль"
          className="form__input"
        />
      </Form>
    </section>
  );
}

export default Login;
