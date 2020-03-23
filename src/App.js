// REACT
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// CSS
import "./App.css";

// COMPONENTS
import Header from "./components/Header";

// CONTAINERS
import Characters from "./containers/Characters";
import Character from "./containers/Character";
import Comics from "./containers/Comics";
import Signup from "./containers/Signup";
import Favorites from "./containers/Favorites";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/characters/:id">
            <Character />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/comics">
            <Comics />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Characters />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
