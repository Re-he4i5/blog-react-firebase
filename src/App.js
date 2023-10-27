import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";

function App() {
  const [isAuth, setIsAuth] = React.useState(localStorage.getItem("isAuth"));
  return (
    <div className="App">
      <Router>
        <Navbar isAuth={isAuth} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/createpost"
            element={<CreatePost isAuth={setIsAuth} />}
          />
          {!isAuth ? (
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          ) : (
            <Route path="/logout" element={<Logout setIsAuth={setIsAuth} />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
