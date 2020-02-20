// REACT
import React from "react";

// AXIOS
import axios from "axios";

// COOKIES
import Cookies from "js-cookie";

// CSS
import "./FavoriteClick.css";

const FavoriteClick = props => {
  const token = Cookies.get("marvelToken");

  const { type, id } = props;

  return (
    <div
      className="favoritesClick"
      onClick={async () => {
        const response = await axios.post(
          "https://marvel-ced.herokuapp.com/user/addfavorite",
          {
            type: type,
            id: id
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        console.log("ahah");

        console.log(response.data);
      }}
    ></div>
  );
};

export default FavoriteClick;
