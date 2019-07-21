import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Grid, Icon } from "semantic-ui-react";
import withAuthProvider from "../../Hoc/withAuthProvider";

class Favorite extends Component {
  render() {
    return (
      <Grid.Column stretched width={1}>
        <Segment basic>
          <Icon name="star outline" size="big" />
        </Segment>
      </Grid.Column>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  // addRemoveFavorite: pair => dispatch(addRemoveFavorite(pair))
});

export default withAuthProvider(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Favorite)
);
