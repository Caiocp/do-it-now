import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Initial from "./pages/Initial";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NewList from "./pages/NewList";

// import { Container } from './styles';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Initial} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/task" component={NewList} />
      </Switch>
    </Router>
  );
}

export default Routes;
