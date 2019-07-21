import React, { Component, Fragment } from "react";
import MarketSelector from "./MarketSelector/MarketSelector";
import Chart from "./Chart/Chart";
import Favorite from "./Favorite/Favorite";
import Errors from "./Errors/Errors";

export default class Monitor extends Component {
  render() {
    return (
      <Fragment>
        <MarketSelector />
        <Chart />
        <Favorite />
        <Errors />
      </Fragment>
    );
  }
}
