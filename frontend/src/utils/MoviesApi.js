class MovieApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(this._baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => this._getResponse(res));
  }
}
const moviesApi = new MovieApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});

export default moviesApi;
