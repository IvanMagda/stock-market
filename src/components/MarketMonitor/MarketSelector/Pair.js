import React, { Component } from "react";
import { connect } from "react-redux";
import { Dropdown, Segment, Grid } from "semantic-ui-react";
import { changePair } from "./actions";

class Pair extends Component {
  formatSymbols(symbols, start, end) {
    return Array.from(
      new Set(symbols.map(item => item.substring(start, end)))
    ).map(i => ({ key: i, text: i, value: i }));
  }

  render() {
    const { changePair, symbols, crypto, fiat } = this.props;
    return (
      <Segment basic>
        <Grid>
          <Grid.Column width={8}>
            <Dropdown
              placeholder="Select Crypto"
              selection
              fluid
              search
              value={crypto}
              options={this.formatSymbols(symbols, 0, 3)}
              onChange={(e, value) => changePair({ crypto: value.value })}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Dropdown
              placeholder="Select Fiat"
              selection
              fluid
              search
              value={fiat}
              options={this.formatSymbols(
                symbols.filter(i => i.includes(crypto)),
                3,
                6
              )}
              onChange={(e, value) => changePair({ fiat: value.value })}
            />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  symbols: state.market.symbols,
  crypto: state.market.pair.crypto,
  fiat: state.market.pair.fiat
});

const mapDispatchToProps = dispatch => ({
  changePair: currency => dispatch(changePair(currency))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pair);
