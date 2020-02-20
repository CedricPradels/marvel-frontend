// REACT
import React from "react";

//CSS
import "./ComicCard.css";

const ComicCard = props => {
  const { thumbnail, title, description } = props;
  return (
    <li className="comicCard">
      <div className="container">
        <div
          className="image"
          style={{
            backgroundImage: `url(${thumbnail.path}.${thumbnail.extension})`
          }}
        ></div>
        <div className="informations">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default ComicCard;
