// REACT
import React from "react";
import { Link } from "react-router-dom";

//CSS
import "./CharacterCard.css";

const CharacterCard = props => {
  const { thumbnail, name, id, description } = props;
  return (
    <li className="characterCard">
      <Link to={`/characters/${id}`}>
        <div className="container">
          <div
            className="image"
            style={{
              backgroundImage: `url(${thumbnail.path}.${thumbnail.extension})`
            }}
          ></div>
          <div className="informations">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CharacterCard;