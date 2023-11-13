import "./FilterCheckbox.css";

function FilterCheckbox({ toggleCheckbox, isCheckbox }) {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        className="checkbox__switch"
        id="switch"
        onChange={toggleCheckbox}
        checked={isCheckbox}
      />
      <label for="switch" className="checkbox__label">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
