import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({
  style,
  isLoggedIn,
  savedMovies,
  saveMovies,
  removeMovies,
  handleFilter,
  nullResult,
}) {
  return (
    <>
      <Header style={style} isLoggedIn={isLoggedIn} />
      <main className="saved-movies">
        <SearchForm movies={savedMovies} handleFilter={handleFilter} />
        {!nullResult ? (
          savedMovies.length === 0 ? (
            <p className="saved-movies__text">
              У вас пока нет сохраненных фильмов
            </p>
          ) : (
            <MoviesCardList
              savedMovies={savedMovies}
              saveMovies={saveMovies}
              removeMovies={removeMovies}
            />
          )
        ) : (
          <p className="movies__text">Запрос не найден.</p>
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
