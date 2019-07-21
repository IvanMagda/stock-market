import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { changePeriod } from "./actions";

class Period extends Component {
  render() {
    const { changePeriod, period } = this.props;
    return (
      <Button.Group fluid>
        {["daily", "monthly", "alltime"].map(value => (
          <Button
            key={value}
            active={value === period}
            onClick={() => changePeriod(value)}
          >
            {value}
          </Button>
        ))}
      </Button.Group>
    );
  }
}

const mapStateToProps = state => ({
  period: state.market.period
});

const mapDispatchToProps = dispatch => ({
  changePeriod: type => dispatch(changePeriod(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Period);
