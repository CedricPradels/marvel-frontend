// REACT
import React, { useState, useEffect } from "react";

// CSS
import "./Comics.css";

// AXIOS
import axios from "axios";

// COMPONENT
import ComicCard from "../components/ComicCard";

const Comics = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getResults = async () => {
    const response = await axios.get(`http://localhost:4000/comics`);
    console.log(response.data.datas);
    console.log(response.data.total);
    setResults(response.data.datas);
    setIsLoading(false);
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <main className="comics">
      <form
        className="formSearch"
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

      <ul className="results">
        {!isLoading &&
          results.map((comic, index) => {
            return <ComicCard key={index} {...comic}></ComicCard>;
          })}
      </ul>
    </main>
  );
};

export default Comics;
