import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import withAuthProvider from "../../Hoc/withAuthProvider";
import { changePair } from "./actions";

class Favorites extends Component {
  handleItemClick = (e, { name }) => {
    this.props.changePair({ crypto: name.slice(0, 3), fiat: name.slice(3, 6) });
  };

  render() {
    const {
      pair: { crypto, fiat }
    } = this.props;

    return (
      <Menu fluid vertical tabular>
        {this.props.favorites.map(val => (
          <Menu.Item
            key={val}
            name={val}
            active={crypto + fiat === val}
            onClick={this.handleItemClick}
          />
        ))}
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.market.favorites,
  pair: state.market.pair
});

const mapDispatchToProps = dispatch => ({
  changePair: currency => dispatch(changePair(currency))
});

export default withAuthProvider(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Favorites)
);
