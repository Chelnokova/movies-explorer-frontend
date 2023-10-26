import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__info">
        <div className="techs__text">
          <h3 className="techs__subtitle">7 технологий</h3>
          <p className="techs__descr">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <div className="techs__blocks">
          <p className="techs__item">HTML</p>
          <p className="techs__item">CSS</p>
          <p className="techs__item">JS</p>
          <p className="techs__item">React</p>
          <p className="techs__item">Git</p>
          <p className="techs__item">Express.js</p>
          <p className="techs__item">mongoDB</p>
        </div>
      </div>
    </section>
  );
}

export default Techs;
