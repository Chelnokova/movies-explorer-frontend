import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({ movies, handleFilter }) {
  const [isCheckbox, setIsCheckbox] = useState(false);
  const { values, handleChange } = useFormWithValidation();
  const queryValue = localStorage.getItem("queryValue");
  const localCheckbox = JSON.parse(localStorage.getItem("stateCheckbox"));
  const searchQuery = values.moviesSearch;
  const location = useLocation();

  function toggleCheckboxChange(e) {
    const isCheckCheckbox = e.target.checked;
    setIsCheckbox(isCheckCheckbox);
    if (searchQuery !== "") {
      handleFilter(movies, searchQuery, !isCheckbox);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    handleFilter(movies, searchQuery, isCheckbox);
  };

  useEffect(() => {
    if (location.pathname === "/movies") {
      setIsCheckbox(localCheckbox || isCheckbox);
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
            placeholder={
              location.pathname === "/saved-movies"
                ? "Фильм"
                : queryValue || "Фильм"
            }
            name="moviesSearch"
            onChange={handleChange}
            value={values.moviesSearch}
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
