// REACT
import React from "react";

const Characters = () => {
  return (
    <main>
      <form
        onSubmit={event => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Entrer le nom d'un personnage (ex. : Hulk)"
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
