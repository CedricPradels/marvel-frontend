// REACT
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// AXIOS
import axios from "axios";

// COOKIES
import Cookies from "js-cookie";

// CSS
import "./ModaleLogin.css";

const ModaleLogin = props => {
  //STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isModaleDisplay, setIsModaleDisplay } = props.states;
  const history = useHistory();

  return (
    <div className="modale">
      <div className="modalWrapper">
        <form
          onSubmit={async event => {
            event.preventDefault();
            const response = await axios.post(
              `${process.env.REACT_APP_BACKEND_URL}/user/login`,
              {
                email: email,
                password: password
              }
            );

            const token = response.data.token;

            if (token) {
              Cookies.set("marvelToken", token);
              setIsModaleDisplay(false);
            } else {
              setEmail("");
              setPassword("");
            }
          }}
        >
          <h2>Login</h2>
          <label htmlFor="email">Adresse mail :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={event => {
              setEmail(event.target.value);
            }}
          ></input>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={event => {
              setPassword(event.target.value);
            }}
          ></input>
          <button type="submit">Se connecter</button>
        </form>
        <form
          onSubmit={event => {
            event.preventDefault();
            setIsModaleDisplay(false);
            history.push("/signup");
          }}
        >
          <button>S'inscrire</button>
        </form>
      </div>
    </div>
  );
};

export default ModaleLogin;
