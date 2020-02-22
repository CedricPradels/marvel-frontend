// REACT
import React, { useState } from "react";
import { Link } from "react-router-dom";

// CSS
import "./Header.css";

// COOKIES
import Cookies from "js-cookie";

// IMAGES
import logoMarvel from "../../images/marvel_logo.png";

// COMPONENTS
import ModaleLogin from "../ModaleLogin";
import { useEffect } from "react";

const Header = () => {
  const [selectedHeader, setSelectedHeader] = useState("characters");
  const token = Cookies.get("marvelToken");

  const [isLoged, setIsLoged] = useState(token);
  const [isModaleDisplay, setIsModaleDisplay] = useState(false);

  useEffect(() => {
    setIsLoged(Cookies.get("marvelToken"));
  }, [isModaleDisplay]);

  return (
    <header>
      {isModaleDisplay && (
        <ModaleLogin
          states={{ isModaleDisplay, setIsModaleDisplay }}
        ></ModaleLogin>
      )}
      <img src={logoMarvel} alt="logo Marvel" />
      <ul>
        <li
          className={selectedHeader === "characters" ? "isSelected" : ""}
          onClick={() => {
            setSelectedHeader("characters");
          }}
        >
          <Link to="/characters">Personnages</Link>
        </li>
        <li
          className={selectedHeader === "comics" ? "isSelected" : ""}
          onClick={() => {
            setSelectedHeader("comics");
          }}
        >
          <Link to="/comics">Comics</Link>
        </li>
        <li
          className={selectedHeader === "favorites" ? "isSelected" : ""}
          onClick={() => {
            setSelectedHeader("favorites");
          }}
        >
          <Link to="/favorites">Favoris</Link>
        </li>
      </ul>

      <div
        className="login"
        onClick={() => {
          if (isLoged) {
            Cookies.remove("marvelToken");
            setIsLoged(false);
          } else {
            setIsModaleDisplay(true);
          }
        }}
      >
        {isLoged ? "Logout" : "Login"}
      </div>
    </header>
  );
};

export default Header;
