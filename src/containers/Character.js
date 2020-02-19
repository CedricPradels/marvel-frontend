// REACT
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// AXIOS
import axios from "axios";

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
    <main>
      <ul>
        {!isLoading &&
          comics.map((comic, index) => {
            return (
              <li key={index}>
                <h3>{comic.title}</h3>
                <img
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={`${comic.title}`}
                />
              </li>
            );
          })}
      </ul>
    </main>
  );
};

export default Character;
