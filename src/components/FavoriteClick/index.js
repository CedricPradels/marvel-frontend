// REACT
import React from "react";

// AXIOS
import axios from "axios";

// COOKIES
import Cookies from "js-cookie";

// CSS
import "./FavoriteClick.css";
import { Star } from "react-feather";

const FavoriteClick = props => {
  const token = Cookies.get("marvelToken");

  const { type, id } = props;

  return (
    <div
      className="favoritesClick"
      onClick={async event => {
        event.stopPropagation();
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/user/addfavorite`,
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
    >
      <Star className={"icon"} />
    </div>
  );
};

export default FavoriteClick;
