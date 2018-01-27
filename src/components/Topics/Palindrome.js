import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      palindrome: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let palindrome = this.state.userInput
      .split("")
      .reverse()
      .join("");
    console.log(palindrome);
    let answer = this.state.userInput == palindrome;
    console.log(answer);
    this.setState({
      palindrome: answer
    });
    console.log(this.state.palindrome);
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          onChange={e => this.setState({ userInput: e.target.value })}
        />
        <button
          className="confirmationButton"
          onClick={() => this.handleClick()}
        >
          Palindromination
        </button>
        <span className="resultsBox">
          Palindrome:{" "}
          {this.state.palindrome !== ""
            ? JSON.stringify(this.state.palindrome)
            : ""}
        </span>
      </div>
    );
  }
}

export default Palindrome;
