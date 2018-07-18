import React from "react";
import magnifier from "../img/magnifier.svg";
export default class DisplayCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      furtherInfo: false
    };
    this.handleFurtherInfo = this.handleFurtherInfo.bind(this);
  }
  handleFurtherInfo() {
    this.setState({ furtherInfo: !this.state.furtherInfo });
  }
  componentDidMount() {
    fetch(`https://api.randomuser.me/?lego`)
      .then(j => j.json())
      .then(data => data.results[0].picture.thumbnail)
      .then(picture => this.setState({ image: picture }));
  }
  render() {
    return (
      <div>
        <div className="card">
          <span id="card-container" className="container">
            <img
              alt="lego"
              className={this.state.image ? "lego" : "magnifier"}
              src={this.state.image ? this.state.image : magnifier}
              onClick={this.handleFurtherInfo}
            />
            <h3>{this.props.character.name}</h3>
          </span>
          {this.state.furtherInfo ? (
            <div className="furtherInfo">
              <h4>
                Height: <span>{this.props.character.height}</span>
              </h4>
              <h4>
                Hair color: <span>{this.props.character.hair_color}</span>
              </h4>
              <h4>
                Eye color: <span>{this.props.character.eye_color}</span>
              </h4>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
