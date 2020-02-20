// REACT
import React, { useEffect, useState } from "react";

// AXIOS
import axios from "axios";

// CSS
import "./Favorites.css";

// COOKIES
import Cookies from "js-cookie";

// COMPONENTS
import CharacterCard from "../components/CharacterCard";
import ComicCard from "../components/ComicCard";

const Favorites = () => {
  // STATES
  const [isLoading, setIsLoading] = useState(true);
  const [favoritesComics, setFavoritesComics] = useState([]);
  const [favoritesCharacters, setFavoritesCharacters] = useState([]);

  const token = Cookies.get("marvelToken");

  useEffect(() => {
    const getFavorites = async () => {
      const response = await axios.get(
        "https://marvel-ced.herokuapp.com/user/favorites",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setFavoritesCharacters(response.data.characters);
      setFavoritesComics(response.data.comics);
      setIsLoading(false);
    };
    getFavorites();
  }, []);

  return (
    <main className="favorites">
      {!isLoading && favoritesCharacters.length !== 0 && <h2>Characters</h2>}
      <ul className="results">
        {!isLoading &&
          favoritesCharacters.map((character, index) => {
            console.log("chars");
            return <CharacterCard key={index} {...character}></CharacterCard>;
          })}
      </ul>
      {!isLoading && favoritesComics.length !== 0 && <h2>Comics</h2>}
      <ul className="results">
        {!isLoading &&
          favoritesComics.map((comic, index) => {
            console.log("comics");
            return <ComicCard key={index} {...comic}></ComicCard>;
          })}
      </ul>
    </main>
  );
};

export default Favorites;
