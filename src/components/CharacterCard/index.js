// REACT
import React from "react";
import { Link, useHistory } from "react-router-dom";

// CSS
import "./CharacterCard.css";

// COMPONENT
import FavoriteClick from "../FavoriteClick";

const CharacterCard = props => {
  const history = useHistory();
  const { thumbnail, name, id, description } = props;
  return (
    <li className="characterCard">
      <div
        className="container"
        onClick={event => {
          event.isPropagationStopped();
          history.push(`/characters/${id}`);
        }}
      >
        <FavoriteClick id={id} type="characters"></FavoriteClick>
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
    </li>
  );
};

export default CharacterCard;
