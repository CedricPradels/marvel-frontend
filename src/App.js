// REACT
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// CSS
import "./App.css";

// COMPONENTS
import Header from "./components/Header";

// CONTAINERS
import Characters from "./containers/Characters";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route to="/">
            <Characters></Characters>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
