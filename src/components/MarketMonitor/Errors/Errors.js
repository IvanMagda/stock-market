import React, { Component } from "react";
import { Message } from "semantic-ui-react";
import connect from "react-redux/es/connect/connect";

class Errors extends Component {
  state = { visible: false, error: "" };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.error !== nextProps.error) {
      return { visible: true, error: nextProps.error };
    }
    return null;
  }

  closeByTimeout = () => {
    setTimeout(() => {
      this.setState({ visible: false });
    }, 5000);
  };

  handleDismiss = () => {
    this.setState({ visible: false });
  };

  render() {
    if (this.state.visible) {
      this.closeByTimeout();
      return (
        <Message
          onDismiss={this.handleDismiss}
          header="Bitcoin average message"
          content={this.props.error}
        />
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  error: state.market.error
});

export default connect(
  mapStateToProps,
  null
)(Errors);
