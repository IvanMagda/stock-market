import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { changeType } from "./actions";

class Type extends Component {
  render() {
    const { changeType, type } = this.props;
    return (
      <Button.Group fluid>
        {["global", "local", "crypto", "tokens"].map(value => (
          <Button key={value} active={value === type} onClick={() => changeType(value)}>
            {value}
          </Button>
        ))}
      </Button.Group>
    );
  }
}

const mapStateToProps = state => ({
  type: state.market.type
});

const mapDispatchToProps = dispatch => ({
  changeType: type => dispatch(changeType(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Type);
