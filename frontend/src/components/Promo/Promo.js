import image from "../../images/promo-logo.svg";
import "./Promo.css";
import NavTab from "../NavTab/NavTab";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__info">
        <div className="promo__text">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&#45;разработки.
          </h1>
          <h2 className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </h2>
        </div>
        <NavTab />
      </div>
      <img src={image} alt="Логотип блока promo" className="promo__img" />
    </section>
  );
}

export default Promo;
