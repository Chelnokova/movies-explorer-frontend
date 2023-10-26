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

function App() {
  return (
    <div className="body">
      <div className="page page__container">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/"
            element={
              <>
                <Header />
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
                <Header style={headerColor} />
                <Movies />
                <Footer />
              </>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <>
                <Header style={headerColor} />
                <SavedMovies />
                <Footer />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Header style={headerColor} />
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
