// REACT
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// CSS
import "./App.css";

// COMPONENTS
import Header from "./components/Header";

// CONTAINERS
import Characters from "./containers/Characters";
import Character from "./containers/Character";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/:id">
            <Character></Character>
          </Route>
          <Route path="/">
            <Characters></Characters>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
