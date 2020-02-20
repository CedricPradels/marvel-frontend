// REACT
import React from "react";

// CSS
import "./FavoriteClick.css";

const FavoriteClick = props => {
  const { type, id } = props;

  return (
    <div
      className="favorites"
      onClick={() => {
        alert(type);
      }}
    ></div>
  );
};

export default FavoriteClick;
