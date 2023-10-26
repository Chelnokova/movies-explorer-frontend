import "./AboutMe.css";
import photo from "../../images/photo.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__student">
        <div className="about-me__container">
          <h3 className="about-me__name">Юлия</h3>
          <p className="about-me__job">Фронтенд-разработчик, 29 лет</p>
          <p className="about-me__descr">
            Я живу в маленьком угледобывающем городке, который находится в
            Кузнецком угольном бассейне. У меня есть муж и сын. Я люблю слушать
            музыку. Всегда мечтала работать из дома, поэтому решила отучиться на
            веб-разработчика и освоить фриланс.{" "}
          </p>
          <a
            href="https://github.com/Chelnokova"
            target="_blank"
            rel="noreferrer"
            className="about-me__link"
          >
            Github
          </a>
        </div>
        <img src={photo} alt="Фото студента" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
