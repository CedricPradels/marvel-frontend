// REACT
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// CSS
import "./Character.css";

// AXIOS
import axios from "axios";

// COMPONENT
import ComicCard from "../components/ComicCard";

const Character = props => {
  const { id } = useParams();
  console.log(id);
  // STATES
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadComics = async () => {
    console.log("ahah");
    const response = await axios.get(`http://localhost:4000/characters/${id}`);
    setComics(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadComics();
  }, []);

  return (
    <main className="character">
      <ul className="results">
        {!isLoading &&
          comics.map((comic, index) => {
            return <ComicCard key={index} {...comic}></ComicCard>;
          })}
      </ul>
    </main>
  );
};

export default Character;
