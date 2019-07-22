import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import NavMenu from "../NavMenu/NavMenu";
import Router from "../Router/Router";
import firebase from "../../firebase";
import { auth } from "../User/actions";
import { callGetFavorites } from "../Api/utils";
import { getGlobalMarket } from "../MarketMonitor/MarketSelector/actions";
import "./style.scss";

class Layout extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(authenticated => {
      this.props.auth(authenticated && authenticated.email);
      this.props.changeType("global");
      authenticated && this.props.callGetFavorites(authenticated.email);
    });
  }
  render() {
    return (
      <Segment basic className="container-main">
        <Grid className="segment-main--grid">
          <Grid.Row className="nav-menu">
            <NavMenu />
          </Grid.Row>
          <Grid.Row className="content">
            <Router isAllowed={this.props.auth} />
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.user.auth
});

const mapDispatchToProps = dispatch => ({
  auth: user => dispatch(auth(user)),
  callGetFavorites: user => dispatch(callGetFavorites(user)),
  changeType: type => dispatch(getGlobalMarket(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
