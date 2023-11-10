import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import {
  LAPTOP_SCREEN_WIDTH,
  TABLET_SCREEN_WIDTH,
  NUM_CARDS_DESKTOP_INIT,
  NUM_CARDS_TABLET_INIT,
  NUM_CARDS_MOBILE_INIT,
  NUM_CARDS_DESKTOP_ADD,
  NUM_CARDS_TABLET_ADD,
} from "../../utils/constants";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCardList({
  cards,
  isLoading,
  saveMovies,
  removeMovies,
  savedMovies,
  isSaved,
}) {
  const [numberMovies, setNumberMovies] = useState(0);
  const location = useLocation();

  function calculatingNumberMoviesScreen() {
    const display = window.innerWidth;
    if (display >= LAPTOP_SCREEN_WIDTH) {
      setNumberMovies(NUM_CARDS_DESKTOP_INIT);
    } else if (display >= TABLET_SCREEN_WIDTH) {
      setNumberMovies(NUM_CARDS_TABLET_INIT);
    } else {
      setNumberMovies(NUM_CARDS_MOBILE_INIT);
    }
  }

  function handleButtonAddMovies() {
    const display = window.innerWidth;
    if (display >= LAPTOP_SCREEN_WIDTH) {
      setNumberMovies(numberMovies + NUM_CARDS_DESKTOP_ADD);
    } else {
      setNumberMovies(numberMovies + NUM_CARDS_TABLET_ADD);
    }
  }

  useEffect(() => {
    calculatingNumberMoviesScreen();
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", calculatingNumberMoviesScreen);
    }, 500);
    return () => {
      window.removeEventListener("resize", calculatingNumberMoviesScreen);
    };
  });

  return (
    <section className="card-list">
      {location.pathname === "/movies" ? (
        isLoading ? (
          <Preloader />
        ) : (
          <>
            <ul className="card-list__items">
              {cards.slice(0, numberMovies).map((card) => {
                return (
                  <MoviesCard
                    card={card}
                    saveMovies={saveMovies}
                    removeMovies={removeMovies}
                    isSaved={isSaved}
                  />
                );
              })}
            </ul>
            {cards.length > numberMovies ? (
              <button
                type="button"
                className="card-list__button"
                onClick={handleButtonAddMovies}
              >
                Ещё
              </button>
            ) : (
              ""
            )}
          </>
        )
      ) : (
        <ul className="card-list__items">
          {savedMovies.map((card) => {
            return (
              <MoviesCard
                card={card}
                saveMovies={saveMovies}
                removeMovies={removeMovies}
                isSaved={isSaved}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default MoviesCardList;
