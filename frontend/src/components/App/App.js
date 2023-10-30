import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";

import "./App.css";
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
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
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
                <Main />
                <Footer />
              </>
            }
          />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route
            path="/movies"
            element={
              <>
                <Header style={headerColor} isLoggedIn={isLoggedIn} />
                <Movies />
                <Footer />
              </>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <>
                <Header style={headerColor} isLoggedIn={isLoggedIn} />
                <SavedMovies />
                <Footer />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Header style={headerColor} isLoggedIn={isLoggedIn} />
                <Profile />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
