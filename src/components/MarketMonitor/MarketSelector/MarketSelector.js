import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Type from "./Type";
import Pair from "./Pair";
import Favorites from "./Favorites";

class MarketSelector extends Component {
  render() {
    return (
      <Grid.Column width={4}>
        <Grid.Row>
          <Type />
        </Grid.Row>
        <Grid.Row>
          <Pair />
        </Grid.Row>
        <Grid.Row>
          <Favorites />
        </Grid.Row>
      </Grid.Column>
    );
  }
}

export default MarketSelector;
