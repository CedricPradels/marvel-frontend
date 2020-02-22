// REACT
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// CSS
import "./Character.css";

// AXIOS
import axios from "axios";

// COMPONENT
import ComicCard from "../components/ComicCard";
import Paginate from "../components/Paginate";
import IsLoading from "../components/IsLoading";

const Character = props => {
  const { id } = useParams();
  // STATES
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // TMP PAGINATE
  const [resultsPerPage, setResultsPerPage] = useState(100);
  const [actualPage, setActualPage] = useState(1);
  const [resultsCount, setResultsCount] = useState(0);

  useEffect(() => {
    const loadComics = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKENT_URL}/characters/${id}?page=${actualPage}&limit=${resultsPerPage}`
      );
      setComics(response.data.datas);
      setResultsCount(response.data.total);

      setIsLoading(false);
    };
    loadComics();
  }, [actualPage]);

  return (
    <main className="character">
      <ul className="results">
        {!isLoading ? (
          comics.map((comic, index) => {
            return <ComicCard key={index} {...comic}></ComicCard>;
          })
        ) : (
          <IsLoading></IsLoading>
        )}
      </ul>
      <Paginate
        states={{ setActualPage, resultsCount, resultsPerPage }}
      ></Paginate>
    </main>
  );
};

export default Character;
