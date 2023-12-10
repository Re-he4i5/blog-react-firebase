import "./App.css";
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <Router>
        <Navbar isAuth={isAuth} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
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
