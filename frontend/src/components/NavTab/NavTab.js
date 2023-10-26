import { Link } from "react-router-dom";
import "./NavTab.css";

function NavTab() {
  return (
    <section className="navtab">
      <Link to="aboutProject" className="navtab__item">
        Узнать больше
      </Link>
    </section>
  );
}

export default NavTab;
