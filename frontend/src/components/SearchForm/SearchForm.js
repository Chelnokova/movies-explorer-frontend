import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({ movies, handleFilter }) {
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [query, setQuery] = useState("");
  const localCheckbox = JSON.parse(localStorage.getItem("stateCheckbox"));
  const location = useLocation();

  function toggleCheckboxChange(e) {
    const isCheckCheckbox = e.target.checked;
    setIsCheckbox(isCheckCheckbox);
    if (query !== "") {
      handleFilter(movies, query, !isCheckbox);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    handleFilter(movies, query, isCheckbox);
  };

  function handleChange(e) {
    setQuery(e.target.value);
  }

  useEffect(() => {
    if (location.pathname === "/movies" && localStorage.getItem("queryValue")) {
      const queryValue = localStorage.getItem("queryValue");
      setIsCheckbox(localCheckbox || isCheckbox);
      setQuery(queryValue);
    } else {
      setIsCheckbox(false);
    }
  }, []);

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__container">
          <input
            className="search__input"
            type="text"
            required
            placeholder="Фильм"
            name="moviesSearch"
            onChange={handleChange}
            value={query || ""}
          />
          <button type="submit" className="search__button">
            Поиск
          </button>
        </div>
        <FilterCheckbox
          toggleCheckbox={toggleCheckboxChange}
          isCheckbox={isCheckbox}
        />
      </form>
    </section>
  );
}

export default SearchForm;
