import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/nchen0")
      .then(response => {
        this.setState({ user: response.data });
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="box">
            <p>{this.state.user.name}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
