import "./Portfolio.css";
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__container">
        <a
          href="https://github.com/Chelnokova/how-to-learn"
          target="_blank"
          rel="noreferrer"
          className="portfolio__link"
        >
          <p className="portfolio__link-text">Статичный сайт</p>
          <img
            src={arrow}
            className="portfolio__link-img"
            alt="Стрелка ссылка"
          />
        </a>
        <a
          href="https://github.com/Chelnokova/russian-travel"
          target="_blank"
          rel="noreferrer"
          className="portfolio__link"
        >
          <p className="portfolio__link-text">Адаптивный сайт</p>
          <img
            src={arrow}
            className="portfolio__link-img"
            alt="Стрелка ссылка"
          />
        </a>
        <a
          href="https://github.com/Chelnokova/react-mesto-api-full-gha"
          target="_blank"
          rel="noreferrer"
          className="portfolio__link"
        >
          <p className="portfolio__link-text">Одностраничное приложение</p>
          <img
            src={arrow}
            className="portfolio__link-img"
            alt="Стрелка ссылка"
          />
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
