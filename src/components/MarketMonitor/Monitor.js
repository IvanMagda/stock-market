import React, { Component, Fragment } from "react";
import MarketSelector from "./MarketSelector/MarketSelector";
import Chart from "./Chart/Chart";
export default class Monitor extends Component {
  render() {
    return (
      <Fragment>
        <MarketSelector />
        <Chart />
      </Fragment>
    );
  }
}
