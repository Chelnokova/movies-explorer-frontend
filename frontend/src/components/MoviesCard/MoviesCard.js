import "./MoviesCard.css";
import { timeConverter } from "../../utils/utils";
import { useLocation } from "react-router-dom";
// import React, { useEffect, useState } from "react";

function MoviesCard({ card, saveMovies, removeMovies, isSaved }) {
  const location = useLocation();

  function handleClickImg() {
    window.open(card.trailerLink);
  }

  function toggleSaveButton() {
    isSaved(card) ? removeMovies(card) : saveMovies(card);
  }

  function handleRemoveButton() {
    removeMovies(card);
  }

  return (
    <li className="card">
      <article className="card__info">
        <h2 className="card__title">{card.nameRU}</h2>
        <p className="card__time">{timeConverter(card)}</p>
      </article>
      <img
        onClick={handleClickImg}
        className="card__img"
        src={
          !card.image.url
            ? card.image
            : `https://api.nomoreparties.co/${card.image.url}`
        }
        alt={`На изображении фильм ${card.nameRU}`}
      />
      {location.pathname === "/movies" ? (
        <button
          onClick={toggleSaveButton}
          type="button"
          className={`card__save-button ${
            isSaved(card) ? "card__save-button_checked" : ""
          }`}
        >
          {!isSaved(card) ? "Сохранить" : ""}
        </button>
      ) : (
        <button
          onClick={handleRemoveButton}
          type="button"
          className="card__save-button card__save-button_type_save"
        ></button>
      )}
    </li>
  );
}

export default MoviesCard;
