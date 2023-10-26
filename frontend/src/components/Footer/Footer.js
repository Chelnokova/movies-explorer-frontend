import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__info">
        <p className="footer__year">© 2020</p>
        <div className="footer__links">
          <a
            href="https://practicum.yandex.ru/"
            target="_blank"
            rel="noreferrer"
            className="footer__item"
          >
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/Chelnokova"
            target="_blank"
            rel="noreferrer"
            className="footer__item"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;