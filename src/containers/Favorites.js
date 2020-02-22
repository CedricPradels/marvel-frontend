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
import IsLoading from "../components/IsLoading";

const Favorites = () => {
  // STATES
  const [isLoading, setIsLoading] = useState(true);
  const [favoritesComics, setFavoritesComics] = useState([]);
  const [favoritesCharacters, setFavoritesCharacters] = useState([]);

  const token = Cookies.get("marvelToken");

  useEffect(() => {
    const getFavorites = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKENT_URL}/user/favorites`,
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
      {!isLoading ? (
        <section>
          {favoritesCharacters.length !== 0 && <h2>Characters</h2>}
          <ul className="results">
            {favoritesCharacters.map((character, index) => {
              console.log("chars");
              return <CharacterCard key={index} {...character}></CharacterCard>;
            })}
          </ul>
          {favoritesComics.length !== 0 && <h2>Comics</h2>}
          <ul className="results">
            {favoritesComics.map((comic, index) => {
              console.log("comics");
              return <ComicCard key={index} {...comic}></ComicCard>;
            })}
          </ul>
        </section>
      ) : (
        <IsLoading></IsLoading>
      )}
    </main>
  );
};

export default Favorites;
