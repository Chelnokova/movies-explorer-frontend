import { BASE_URL } from "./auth";

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }).then((res) => this._getResponse(res));
  }

  sendUserData(dataUser) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: dataUser.name,
        email: dataUser.email,
      }),
    }).then((res) => this._getResponse(res));
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }).then((res) => this._getResponse(res));
  }

  saveMovies(card) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: "https://api.nomoreparties.co" + card.image.url,
        trailerLink: card.trailerLink,
        thumbnail:
          "https://api.nomoreparties.co" + card.image.formats.thumbnail.url,
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
      }),
    }).then((res) => this._getResponse(res));
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }).then((res) => this._getResponse(res));
  }
}
const mainApi = new MainApi({
  baseUrl: "https://api.julia.movies.nomoredomainsrocks.ru",
});

export default mainApi;
