import React, { Component } from "react";
import { Button, Header, Icon, Modal, Menu, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import firebase from "../../firebase";
import { login, error, resetError } from "./actions";

export class Login extends Component {
  state = {
    email: "",
    password: "",
    error: null,
    modalOpen: false
  };

  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => {
    this.setState({ modalOpen: false });
    this.props.resetError();
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.props.login();
        this.props.resetError();
        this.setState({ modalOpen: false });
      })
      .catch(error => {
        this.props.error(error.message);
      });
  };

  setModalName = () => "Log In";

  render() {
    const { email, password } = this.state;
    const { errorMessage } = this.props;

    return (
      <Modal
        trigger={
          <Menu.Item name={this.setModalName()} onClick={this.handleOpen} />
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size="mini"
      >
        <Header content={this.setModalName()} />
        <Modal.Content>
          <Input
            icon="at"
            name="email"
            iconPosition="left"
            placeholder="Email"
            value={email}
            onChange={this.handleInputChange}
            fluid
          />
          <br />
          <Input
            icon="lock"
            name="password"
            iconPosition="left"
            placeholder="Password"
            type="password"
            value={password}
            onChange={this.handleInputChange}
            fluid
          />
          {errorMessage && (
            <span>
              <Icon name="warning" />
              {errorMessage}
            </span>
          )}
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this.handleSubmit} inverted>
            <Icon name="checkmark" /> Ok
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.user.error
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login()),
  resetError: () => dispatch(resetError()),
  error: message => dispatch(error(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
