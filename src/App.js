import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = { pair: "", users: {} };

  // componentDidMount() {
  //   fetch("http://localhost:8080/BTCUSD")
  //     .then(response => response.json())
  //     .then(users => this.setState({ users }));
  // }

  getData() {
    console.log(this.state.pair);
    fetch(`http://localhost:8080/${this.state.pair}`)
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  updateInputValue(evt) {
    // evt.preventDefault();
    this.setState({
      pair: evt.target.value.toUpperCase()
    });
  }

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.users.ask && (
              <span>
                {this.state.users.display_symbol} Ask: {this.state.users.ask} $
              </span>
            )}
          </p>
          <input
            value={this.state.pair}
            onChange={evt => this.updateInputValue(evt)}
          />
          <button onClick={() => this.getData()}>Search</button>
        </header>
      </div>
    );
  }
}

export default App;
