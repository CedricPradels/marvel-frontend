// REACT
import React, { useState } from "react";
import { Link } from "react-router-dom";

// AXIOS
import axios from "axios";

const Characters = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main>
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

      <section className="results">
        {!isLoading &&
          results.map((result, index) => {
            return (
              <Link to={`/${result.id}`} key={index}>
                <article>
                  <img
                    src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
                    alt={result.name}
                  />
                  <h2>{result.name}</h2>
                  <p>{result.description}</p>
                </article>
              </Link>
            );
          })}
      </section>
    </main>
  );
};

export default Characters;
