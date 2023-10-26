import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies() {
  return (
    <section className="movies">
      <Preloader />
      <SearchForm />
      <MoviesCardList />
      <button className="movies__button">Ещё</button>
    </section>
  );
}

export default Movies;
