import { connect } from "react-redux";
import firebase from "../../firebase";
import { error, login, resetError } from "./actions";
import { Login } from "./Login";

class Register extends Login {
  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.props.login();
        this.props.resetError();
      })
      .catch(error => {
        this.setState({ error: error });
      });
  };

  setModalName = () => "Register";
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
)(Register);
