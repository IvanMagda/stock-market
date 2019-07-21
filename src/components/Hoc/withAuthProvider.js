import React, { Component } from "react";
import { connect } from "react-redux";

export default WrappedComponent =>
  connect(
    state => ({
      auth: state.user.auth
    }),
    null
  )(
    class extends Component {
      render() {
        return this.props.auth ? <WrappedComponent /> : null;
      }
    }
  );
