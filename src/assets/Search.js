import React from "react";
import ShowResults from "./ShowResults";
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      characters: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchAPIData = this.fetchAPIData.bind(this);
  }

  handleChange(event) {
    if (event.target.value === "") {
      this.setState({ characters: [], value: "" });
      return;
    }
      this.setState({ value: event.target.value }, this.fetchAPIData);
      return;
  }
  fetchAPIData() {
    fetch(`https://swapi.co/api/people/?search=${this.state.value}`)
      .then(j => j.json())
      .then(data => {
        this.setState({ characters: data.results });
      });
  }
  render() {
    return (
      <div className="search" id="search">
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Insert the name here"
          />
        </label>
        <ShowResults characters={this.state.characters} />
      </div>
    );
  }
}
