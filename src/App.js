import React, { Component } from "react";
import leia from "./leia.png";
import "./App.css";
import Search from "./Search.js";
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
