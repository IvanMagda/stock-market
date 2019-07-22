import React, { Component } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import { Segment, Grid } from "semantic-ui-react";
import { getGlobalMarket } from "../MarketSelector/actions";
import { connect } from "react-redux";

class Chart extends Component {
  render() {
    return (
      <Grid.Column stretched width={11}>
        <Segment basic>
          <h2>{this.props.currentChart}</h2>
          <LineChart
            width={1200}
            height={650}
            data={this.props.history}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line
              dot={false}
              type="monotone"
              dataKey="average"
              stroke="#8884d8"
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis />
            <YAxis />
            <Tooltip />
          </LineChart>
        </Segment>
      </Grid.Column>
    );
  }
}
const mapStateToProps = state => ({
  history: state.market.history,
  state: state,
  currentChart: state.market.currentChart
});

const mapDispatchToProps = dispatch => ({
  changeType: type => dispatch(getGlobalMarket(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart);
