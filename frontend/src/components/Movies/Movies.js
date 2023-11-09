import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({
  cards,
  isLoggedIn,
  headerColor,
  handleFiltered,
  isSearching,
  isLoading,
  nullResult,
  isReqError,
  saveMovies,
  removeMovies,
  isSaved,
}) {
  const movies = JSON.parse(localStorage.getItem("allMovies"));
  const searchLocalMovies = JSON.parse(localStorage.getItem("initialCard"));
  return (
    <>
      <Header style={headerColor} isLoggedIn={isLoggedIn} />
      <main className="movies">
        <SearchForm movies={movies} handleFiltered={handleFiltered} />
        {!isReqError ? (
          isSearching ? (
            !nullResult ? (
              <MoviesCardList
                cards={cards.length === 0 ? searchLocalMovies : cards}
                isLoading={isLoading}
                saveMovies={saveMovies}
                removeMovies={removeMovies}
                isSaved={isSaved}
              />
            ) : (
              <p className="movies__text">Запрос не найден.</p>
            )
          ) : (
            <p className="movies__text">Выполните свой первый поиск.</p>
          )
        ) : (
          <p className="movies__text">
            Во время поискового запроса произошла ошибка. Возможно, проблема с
            соединением или сервер недоступен. Подождите немного и попробуйте
            ещё раз
          </p>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
