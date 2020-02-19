// REACT
import React from "react";
import { Link } from "react-router-dom";

// CSS
import "./Header.css";

// IMAGES
import logoMarvel from "../../images/marvel_logo.png";

const Header = () => {
  return (
    <header>
      <img src={logoMarvel} alt="logo Marvel" />
      <ul>
        <li>
          <Link to="/characters">Personnages</Link>
        </li>
        <li>
          <Link to="/comics">Comics</Link>
        </li>
        <li>
          <Link to="/favorites">Favoris</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
