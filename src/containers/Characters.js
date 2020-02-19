// REACT
import React, { useState } from "react";
import { Link } from "react-router-dom";

// AXIOS
import axios from "axios";

// COMPONENTS
import CharacterCard from "../components/CharacterCard";

// CSS
import "./Characters.css";

const Characters = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="characters">
      <form
        onSubmit={async event => {
          event.preventDefault();
          const response = await axios.get(
            `http://localhost:4000/characters?name=${search}`
          );
          setResults(response.data);
          console.log(response.data);
          setIsLoading(false);
        }}
      >
        <input
          type="text"
          placeholder="Entrer le nom d'un personnage (ex. : Hulk)"
          value={search}
          onChange={event => {
            event.preventDefault();
            setSearch(event.target.value);
          }}
        ></input>
        <button type="submit">Rechercher</button>
      </form>

      <ul className="results">
        {!isLoading &&
          results.map((result, index) => {
            return <CharacterCard key={index} {...result}></CharacterCard>;
          })}
      </ul>
    </main>
  );
};

export default Characters;
