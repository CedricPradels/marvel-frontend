// REACT
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// AXIOS
import axios from "axios";

// COMPONENTS
import CharacterCard from "../components/CharacterCard";
import Paginate from "../components/Paginate";

// CSS
import "./Characters.css";

const Characters = () => {
  // STATES
  // SEARCH
  const [search, setSearch] = useState("");
  const [searchRequest, setSearchRequest] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // TMP PAGINATE
  const [resultsPerPage, setResultsPerPage] = useState(100);
  const [actualPage, setActualPage] = useState(1);
  const [resultsCount, setResultsCount] = useState(0);

  useEffect(() => {
    const getResults = async () => {
      const response = await axios.get(
        `https://marvel-ced.herokuapp.com/characters?name=${searchRequest}&page=${actualPage}&limit=${resultsPerPage}`
      );
      setResults(response.data.datas);
      setResultsCount(response.data.total);
      setIsLoading(false);
    };
    getResults();
  }, [actualPage, searchRequest]);

  return (
    <main className="characters">
      <form
        className="formSearch"
        onSubmit={event => {
          event.preventDefault();
          setSearchRequest(search);
          setActualPage(1);
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
      <Paginate
        states={{ setActualPage, resultsCount, resultsPerPage }}
      ></Paginate>
    </main>
  );
};

export default Characters;
