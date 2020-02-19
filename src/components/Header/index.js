// REACT
import React from "react";
import "./Header.css";

// IMAGES
import logoMarvel from "../../images/marvel_logo.png";

const Header = () => {
  return (
    <header>
      <img src={logoMarvel} alt="logo Marvel" />
      <ul>
        <li>Personnages</li>
        <li>Commics</li>
        <li>Favoris</li>
      </ul>
    </header>
  );
};

export default Header;
