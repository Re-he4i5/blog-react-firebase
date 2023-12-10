import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  isAuth: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAuth }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {!isAuth ? (
        <Link to="/login">Login</Link>
      ) : (
        <>
          <Link to="/createpost">Create Post</Link>
          <Link to="/logout">Logout</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
