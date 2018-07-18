import React, { Component } from "react";
import leia from "./img/leia.png";
import "./stylesheet/App.css";
import Search from "./assets/Search.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={leia} className="App-logo" alt="logo" />
        </header>
        <Search />
        <footer className="App-footer">
          {new Date().getFullYear()} - Amanda Cavallaro.
        </footer>
      </div>
    );
  }
}

export default App;
