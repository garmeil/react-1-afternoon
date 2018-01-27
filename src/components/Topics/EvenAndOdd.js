import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }
  sortEm() {
    let array = this.state.userInput.split(",");
    if (!array.every(val => Number(val))) {
      alert("Numbers Only!");
      return;
    }
    let evenArray = [];
    let oddArray = [];
    array.forEach(
      val =>
        Number(val) % 2 === 0
          ? evenArray.push(Number(val))
          : oddArray.push(Number(val))
    );
    this.setState({ evenArray: evenArray, oddArray: oddArray });
  }
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={e => this.setState({ userInput: e.target.value })}
        />
        <button className="confirmationButton" onClick={() => this.sortEm()}>
          Sort
        </button>
        <span className="resultsBox">
          Evens: {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          Odds: {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;
