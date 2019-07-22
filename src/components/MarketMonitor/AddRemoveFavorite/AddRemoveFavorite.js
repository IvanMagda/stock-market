import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Grid, Icon } from "semantic-ui-react";
import withAuthProvider from "../../Hoc/withAuthProvider";
import { updateFavorites } from "./actions";

class AddRemoveFavorite extends Component {
  render() {
    const { favorites, currentChart } = this.props;
    const favorite = favorites.includes(currentChart);
    return (
      <Grid.Column stretched width={1}>
        <Segment basic>
          <Icon
            style={{ cursor: "pointer" }}
            name={`star${favorite ? "" : " outline"}`}
            size="big"
            onClick={() => this.props.updateFavorites()}
          />
        </Segment>
      </Grid.Column>
    );
  }
}

const mapStateToProps = state => ({
  currentChart: state.market.currentChart,
  favorites: state.market.favorites
});

const mapDispatchToProps = dispatch => ({
  updateFavorites: () => dispatch(updateFavorites())
});

export default withAuthProvider(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddRemoveFavorite)
);
