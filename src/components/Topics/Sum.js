import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };
  }
  summate() {
    let sum = Number(this.state.number1) + Number(this.state.number2);
    this.setState({ sum: sum });
  }
  render() {
    return (
      <div className="puzzleBox sumPb">
        <h4>Sum</h4>
        <input
          className="inputLine"
          onChange={e => this.setState({ number1: e.target.value })}
        />
        <input
          className="inputLine"
          onChange={e => this.setState({ number2: e.target.value })}
        />
        <button className="confirmationButton" onClick={() => this.summate()}>
          Summate
        </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
