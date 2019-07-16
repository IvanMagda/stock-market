import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Friends from "../Friends/Friends";
import Monitor from "../MarketMonitor/Monitor";
import Favorites from "../Favorites/Favorites";
import { ProtectedRoute } from "./ProtectedRoute";

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Monitor} />
        <Route path="/friends" component={Friends} />
        <ProtectedRoute
          path="/favorites"
          component={Favorites}
          isAllowed={this.props.isAllowed}
        />
      </Switch>
    );
  }
}
