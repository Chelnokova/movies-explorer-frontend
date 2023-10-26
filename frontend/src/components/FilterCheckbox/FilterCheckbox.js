import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <form className="checkbox">
      <input type="checkbox" className="checkbox__switch" id="switch" />
      <label for="switch" className="checkbox__label">
        Короткометражки
      </label>
    </form>
  );
}

export default FilterCheckbox;
