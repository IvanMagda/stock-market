import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";

class Favorites extends Component {
  state = { activeItem: "bio" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;

    return (
      <Menu fluid vertical tabular>
        {Array(10)
          .fill(20)
          .map((val, idx) => (
            <Menu.Item
              key={idx}
              name={`bio ${idx}`}
              active={activeItem === `bio ${idx}`}
              onClick={this.handleItemClick}
            />
          ))}

        <Menu.Item
          name="pics"
          active={activeItem === "pics"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="companies"
          active={activeItem === "companies"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="links"
          active={activeItem === "links"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
