import "./styles/App.css";
import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home as HomeSimple } from "./pages/Simple";
import { Home as HomeComplex } from "./pages/Complex";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <HomeSimple />
          </Route>
          <Route path="/complex">
            <HomeComplex />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
