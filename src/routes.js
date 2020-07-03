import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Initial,
  Login,
  Register,
  Dashboard,
  NewList,
} from "./components/pages/";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Initial} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/list" component={NewList} />
      </Switch>
    </Router>
  );
}

export default Routes;
