// REACT
import React, { useState } from "react";

// AXIOS
import axios from "axios";

const Characters = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  return (
    <main>
      <form
        onSubmit={async event => {
          console.log("ahah");
          event.preventDefault();
          const response = await axios.get(
            `http://localhost:4000/test?name=${search}`
          );
          setResults(response.data);
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
        <article>ahah</article>
      </section>
    </main>
  );
};

export default Characters;
