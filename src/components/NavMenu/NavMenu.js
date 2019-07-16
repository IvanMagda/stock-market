import React, { Component, Fragment } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Register from "../User/Register";
import Login from "../User/Login";
import LogOut from "../User/LogOut";

class NavMenu extends Component {
  state = { activeItem: "home" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    const { auth } = this.props;
    return (
      <Menu pointing secondary fluid>
        <Menu.Item
          name="home"
          as={Link}
          to="/"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          <Icon name="home" />
        </Menu.Item>
        {auth && (
          <Menu.Item
            name="favorites"
            as={Link}
            to="/favorites"
            active={activeItem === "favorites"}
            onClick={this.handleItemClick}
          />
        )}
        <Menu.Item
          name="friends"
          as={Link}
          to="/friends"
          active={activeItem === "friends"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          {auth ? (
            <LogOut />
          ) : (
            <Fragment>
              <Register />
              <Login />
            </Fragment>
          )}
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.user.auth
});

export default connect(
  mapStateToProps,
  null
)(NavMenu);
