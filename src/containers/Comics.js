// REACT
import React, { useState, useEffect } from "react";

// CSS
import "./Comics.css";

// AXIOS
import axios from "axios";

// COMPONENT
import ComicCard from "../components/ComicCard";
import Paginate from "../components/Paginate";

const Comics = () => {
  // STATES
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
        `${process.env.REACT_APP_BACKENT_URL}/comics?title=${search}&page=${actualPage}&limit=${resultsPerPage}`
      );

      setResults(response.data.datas);
      setResultsCount(response.data.total);
      setIsLoading(false);
    };
    getResults();
  }, [actualPage, searchRequest]);

  return (
    <main className="comics">
      <form
        className="formSearch"
        onSubmit={event => {
          event.preventDefault();

          setSearchRequest(search);
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
      <Paginate
        states={{ setActualPage, resultsCount, resultsPerPage }}
      ></Paginate>
    </main>
  );
};

export default Comics;
