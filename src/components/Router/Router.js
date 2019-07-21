import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Friends from "../Friends/Friends";
import Monitor from "../MarketMonitor/Monitor";

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Monitor} />
        <Route path="/friends" component={Friends} />
      </Switch>
    );
  }
}
