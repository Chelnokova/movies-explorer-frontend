import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// import Preloader from "../Preloader/Preloader";

function Movies() {
  return (
    <main className="movies">
      {/* <Preloader /> */}
      <SearchForm />
      <MoviesCardList />
      <button type="button" className="movies__button">
        Ещё
      </button>
    </main>
  );
}

export default Movies;
