import React, { useState, useEffect } from "react";
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { SHORT_FILM_DURATION } from "../../utils/constants";
import * as auth from "../../utils/auth";

import "./App.css";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
const headerColor = {
  background: "#202020",
};
const burgerColor = {
  background: "#073042",
};
const colorIconProfile = {
  background: "#0F4157",
};

function App() {
  const [initialCards, setInitialCard] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [resStatus, setResStatus] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [resSearchSaveMovies, setResSearchSaveMovies] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [nullResult, setNullResult] = useState(false);
  const [nullResSaveMovies, setNullResSaveMovies] = useState(false);
  const [isReqError, setIsReqError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  function handleUpdateUser(name, email) {
    mainApi
      .sendUserData(name, email)
      .then((res) => {
        setCurrentUser(res.data);
        setResStatus(true);
      })
      .catch((err) => console.log(err));
  }

  function handleRegister({ name, email, password }) {
    auth
      .register(name, email, password)
      .then((res) => {
        setResStatus(false);
        handleLogin({ email, password });
        navigate("/signin", { replace: true });
      })
      .catch((err) => {
        setResStatus(true);
        console.log(err);
      });
  }

  function handleLogin({ email, password }) {
    auth
      .login(email, password)
      .then((res) => {
        setIsLoggedIn(true);
        setResStatus(false);
        localStorage.setItem("token", res.token);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setResStatus(true);
      });
  }

  function tokenVarification() {
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            navigate(pathname, { replace: true });
          }
        })
        .catch((err) => console.log(err));
    }
  }

  function signOut() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsSearching(false);
    setSavedMovies([]);
    setInitialCard([]);
    localStorage.clear();

    navigate("/", { replace: true });
  }

  function filterMovies(movies, dataQuery, checkbox) {
    const searchMovies = movies.filter((movie) => {
      const movieRu = movie.nameRU
        .toLowerCase()
        .includes(dataQuery.toLowerCase());
      const movieEn = movie.nameEN
        .toLowerCase()
        .includes(dataQuery.toLowerCase());

      return movieRu || movieEn;
    });
    if (checkbox) {
      const shortSearchMovies = searchMovies.filter((movie) => {
        return movie.duration <= SHORT_FILM_DURATION;
      });
      return shortSearchMovies;
    } else {
      return searchMovies;
    }
  }

  function handleFilterSavedMovies(movies, dataQuery, checkbox) {
    const filteredSavedMovies = filterMovies(movies, dataQuery, checkbox);
    if (filteredSavedMovies.length === 0) {
      setNullResSaveMovies(true);
    } else {
      setNullResSaveMovies(false);
      setResSearchSaveMovies(filteredSavedMovies);
      //   setSavedMovies(filteredSavedMovies);
    }
  }

  function handleFilterMovies(movies, dataQuery, checkbox) {
    if (!localStorage.getItem("allMovies")) {
      moviesApi
        .getMovies()
        .then((movies) => {
          setIsLoading(true);
          setIsSearching(true);
          localStorage.setItem("allMovies", JSON.stringify(movies));
          const searchMovies = filterMovies(movies, dataQuery, checkbox);
          if (searchMovies.length !== 0) {
            setInitialCard(searchMovies);
            localStorage.setItem("queryValue", dataQuery);
            localStorage.setItem("stateCheckbox", JSON.stringify(checkbox));
            localStorage.setItem("initialCards", JSON.stringify(searchMovies));
            setIsReqError(false);
            setNullResult(false);
          } else {
            setNullResult(true);
            localStorage.setItem("initialCards", JSON.stringify(""));
            localStorage.setItem("stateCheckbox", JSON.stringify(checkbox));
            localStorage.setItem("queryValue", dataQuery);
          }
        })
        .catch((err) => {
          setIsReqError(true);
          console.log(err);
          setIsLoading(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      const filtredListMovies = filterMovies(movies, dataQuery, checkbox);
      if (filtredListMovies.length === 0) {
        setNullResult(true);
        localStorage.setItem("initialCards", JSON.stringify(""));
        localStorage.setItem("stateCheckbox", JSON.stringify(checkbox));
        localStorage.setItem("queryValue", dataQuery);
      } else {
        setNullResult(false);
        setInitialCard(filtredListMovies);
        localStorage.setItem("initialCards", JSON.stringify(filtredListMovies));
        localStorage.setItem("queryValue", dataQuery);
        localStorage.setItem("stateCheckbox", JSON.stringify(checkbox));
        console.log(JSON.parse(localStorage.getItem("initialCards")));
      }
    }
  }

  function isSaved(card) {
    return savedMovies.some((movie) => movie.movieId === card.id);
  }

  function saveMovies(card) {
    mainApi
      .saveMovies(card)
      .then((res) => {
        console.log(res);
        setSavedMovies([res.data, ...savedMovies]);
        localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
      })
      .catch((err) => console.log(err));
  }

  function removeMovies(card) {
    const movie = savedMovies.find(
      (movie) => movie.movieId === (card.id || card.movieId)
    );
    mainApi
      .deleteMovie(movie._id)
      .then((res) => {
        console.log(res);
        setSavedMovies(
          savedMovies.filter((savedMovie) => savedMovie._id !== movie._id)
        );
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
        .then(([userData, movies]) => {
          setCurrentUser(userData.user);
          setSavedMovies(movies.reverse());
          setIsReqError(false);
          const cardsLocal = JSON.parse(localStorage.getItem("initialCards"));
          if (cardsLocal) {
            setInitialCard(cardsLocal);
          }
        })
        .catch((err) => {
          setIsReqError(true);
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    tokenVarification();
    if (localStorage.getItem("queryValue")) {
      setIsSearching(true);
    }
    const localCards = JSON.parse(localStorage.getItem("initialCards"));
    if (localCards.length === 0) {
      setNullResult(true);
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route
              path="/"
              element={
                <>
                  <Header
                    burgerColor={burgerColor}
                    colorIconProfile={colorIconProfile}
                    isLoggedIn={isLoggedIn}
                  />
                  <Main
                    setResSearchSaveMovies={setResSearchSaveMovies}
                    setNullResSaveMovies={setNullResSaveMovies}
                  />
                  <Footer />
                </>
              }
            />
            <Route
              path="/signin"
              element={
                isLoggedIn ? (
                  <Navigate to="/movies" replace />
                ) : (
                  <Login
                    handleLogin={handleLogin}
                    resStatus={resStatus}
                    setResStatus={setResStatus}
                  />
                )
              }
            />
            <Route
              path="/signup"
              element={
                isLoggedIn ? (
                  <Navigate to="/movies" replace />
                ) : (
                  <Register
                    handleRegister={handleRegister}
                    resStatus={resStatus}
                    setResStatus={setResStatus}
                  />
                )
              }
            />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  path="/movies"
                  element={Movies}
                  cards={initialCards}
                  isLoggedIn={isLoggedIn}
                  headerColor={headerColor}
                  handleFilter={handleFilterMovies}
                  saveMovies={saveMovies}
                  removeMovies={removeMovies}
                  savedMovies={savedMovies}
                  isSearching={isSearching}
                  isLoading={isLoading}
                  nullResult={nullResult}
                  isReqError={isReqError}
                  isSaved={isSaved}
                  setResSearchSaveMovies={setResSearchSaveMovies}
                  setNullResSaveMovies={setNullResSaveMovies}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  path="/saved-movies"
                  element={SavedMovies}
                  savedMovies={savedMovies}
                  removeMovies={removeMovies}
                  handleFilter={handleFilterSavedMovies}
                  isLoggedIn={isLoggedIn}
                  style={headerColor}
                  nullResult={nullResSaveMovies}
                  resSearchSaveMovies={resSearchSaveMovies}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  isLoggedIn={isLoggedIn}
                  onUpdateUser={handleUpdateUser}
                  signOut={signOut}
                  resStatus={resStatus}
                  style={headerColor}
                  setResSearchSaveMovies={setResSearchSaveMovies}
                  setNullResSaveMovies={setNullResSaveMovies}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
