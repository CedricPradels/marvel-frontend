// REACT
import React, { useState } from "react";

// AXIOS
import axios from "axios";

const Comics = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main>
      <form
        onSubmit={async event => {
          event.preventDefault();
          const response = await axios.get(
            `http://localhost:4000/comics?title=${search}`
          );
          setResults(response.data);
          console.log(response.data);
          setIsLoading(false);
        }}
      >
        <input
          type="text"
          placeholder="Entrer le nom d'un comic (ex. : Hulk)"
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
              <article>
                <img
                  src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
                  alt={result.name}
                />
                <h2>{result.name}</h2>
                <p>{result.description}</p>
              </article>
            );
          })}
      </section>
    </main>
  );
};

export default Comics;
