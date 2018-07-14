import React from "react";
import DisplayCharacter from "./DisplayCharacter";

export default class ShowResults extends React.Component {
  render() {
    let currentState;

    currentState = this.props.characters.map(character => (
      <DisplayCharacter key={character.name} character={character} />
    ));
    return (
      <div>
        <h5>Were you looking for any of the characters below?</h5>
        {currentState}
      </div>
    );
  }
}
