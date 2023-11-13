import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="about">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__container">
        <div className="about-project__info">
          <div className="about-project__item">
            <h3 className="about-project__subtitle">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__descr">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__item">
            <h3 className="about-project__subtitle">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__descr">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__table">
          <h3 className="about-project__table-title about-project__table-title_green">
            1 неделя
          </h3>
          <h3 className="about-project__table-title">4 недели</h3>
          <p className="about-project__table-descr">Back-end</p>
          <p className="about-project__table-descr">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
