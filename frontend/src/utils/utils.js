// import { SHORT_FILM_DURATION } from "./constants";
// import { useLocation } from "react-router-dom";
// const location = useLocation();

export function timeConverter(card) {
  const hours = Math.floor(card.duration / 60);
  const minutes = card.duration - hours * 60;
  const duration = hours ? `${hours}ч ${minutes}м` : `${minutes}мин`;
  return duration;
}

// export function filteredMovies(movies, dataQuery, checkbox, setNullResult) {
//   const searchMovies = movies.filter((movie) => {
//     const movieRu = movie.nameRU
//       .toLowerCase()
//       .includes(dataQuery.toLowerCase());
//     const movieEn = movie.nameEN
//       .toLowerCase()
//       .includes(dataQuery.toLowerCase());

//     return movieRu || movieEn;
//   });
//   if (checkbox) {
//     const shortSearchMovies = searchMovies.filter((movie) => {
//       return movie.duration < SHORT_FILM_DURATION;
//     });
//     if (shortSearchMovies.length === 0) {
//       setNullResult(true);
//     } else {
//       setNullResult(false);
//       localStorage.setItem("initialCards", JSON.stringify(shortSearchMovies));
//       return shortSearchMovies;
//     }
//   } else {
//     setNullResult(false);
//     if (location.pathname === "/movies") {
//       localStorage.setItem("initialCards", JSON.stringify(searchMovies));
//     } else {
//     }

//     return searchMovies;
//   }
// }
