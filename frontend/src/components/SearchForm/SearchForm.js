import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <input
          className="search__input"
          type="text"
          required
          placeholder="Фильм"
        />
        <button type="submit" className="search__button">
          Поиск
        </button>
      </form>
      <FilterCheckbox />
      <div className="search__border"></div>
    </section>
  );
}

export default SearchForm;
