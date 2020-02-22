// REACT
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// CSS
import "./Signup.css";

// AXIOS
import axios from "axios";

// COOKIES
import Cookies from "js-cookie";

const Signup = () => {
  const history = useHistory();
  // STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <main className="signup">
      <form
        onSubmit={async event => {
          event.preventDefault();
          if (password === confirm) {
            const response = await axios.post(
              `${process.env.REACT_APP_BACKENT_URL}/user/signin`,
              {
                email: email,
                password: password
              }
            );
            const token = response.data.token;

            if (token) {
              Cookies.remove("marvelToken");
              history.push("/characters");
            } else {
              setPassword("");
              setConfirm("");
              setEmail("");
            }
          } else {
            setPassword("");
            setConfirm("");
          }
        }}
      >
        <h2>Créer un compte</h2>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
        ></input>

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={event => {
            setPassword(event.target.value);
          }}
        ></input>
        <label htmlFor="confirm">Confirm password</label>
        <input
          id="confirm"
          type="password"
          value={confirm}
          onChange={event => {
            setConfirm(event.target.value);
          }}
        ></input>
        <button type="submit">Créer un compte</button>
      </form>
    </main>
  );
};

export default Signup;
