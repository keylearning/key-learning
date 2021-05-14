import "./styles/App.css";
import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home as HomeSimple } from "./pages/Simple";
import { Home as HomeComplex } from "./pages/Complex";

import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
Amplify.configure(aws_exports);

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

export default withAuthenticator(App, { includeGreetings: true });
