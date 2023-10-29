import React from "react";
import { Link } from "react-scroll";
import "./NavTab.css";

function NavTab() {
  return (
    <section className="navtab">
      <Link to="about" smooth={true} duration={300} className="navtab__item">
        Узнать больше
      </Link>
    </section>
  );
}

export default NavTab;
