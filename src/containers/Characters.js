// REACT
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// AXIOS
import axios from "axios";

// COMPONENTS
import CharacterCard from "../components/CharacterCard";

// CSS
import "./Characters.css";

const Characters = () => {
  // STATES
  // SEARCH
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // PAGE NUMBERS
  const [totalResults, setTotalResults] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [tabPageNumbers, setTabPageNumbers] = useState([]);

  const getResults = async () => {
    const response = await axios.get(
      `http://localhost:4000/characters?page=${pageNumber}`
    );
    console.log(response.data.datas);
    console.log(response.data.total);
    setResults(response.data.datas);
    setTotalResults(response.data.total);
    createPageNumbers(response.data.total);
    setIsLoading(false);
  };

  useEffect(() => {
    getResults();
  }, []);

  const createPageNumbers = total => {
    const swapTab = [];
    console.log(total);
    for (let i = 0; i * 100 <= total; i++) {
      const swapPageNumber = i + 1;
      swapTab.push(
        <li
          onClick={() => {
            setPageNumber(swapPageNumber);
          }}
          className={swapPageNumber === pageNumber ? "isActualPageNumber" : ""}
        >
          {swapPageNumber}
        </li>
      );
    }
    setTabPageNumbers(swapTab);
  };

  useEffect(() => {
    createPageNumbers(totalResults);
  }, [pageNumber, results]);

  return (
    <main className="characters">
      <form
        onSubmit={async event => {
          event.preventDefault();
          setPageNumber(1);
          const response = await axios.get(
            `http://localhost:4000/characters?name=${search}&page=${pageNumber}`
          );
          setResults(response.data.results);
          setTotalResults(response.data.total);
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
      <ul>{!isLoading && tabPageNumbers}</ul>
    </main>
  );
};

export default Characters;
