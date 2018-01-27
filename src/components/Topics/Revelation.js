import React, { Component } from "react";

class Revelation extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      name: "Cody",
      message: "Just For You",
      show: false
    };
  }
  handleClick() {
    if (this.state.show)
      return this.setState({ message: "Just For You", show: false });
    this.setState({
      name: this.state.userInput,
      message: "You Are Loved",
      show: true
    });
  }
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Revelation</h4>
        <span className="puzzleText">
          {this.state.show ? <span>&#9825;</span> : false}
          {this.state.message} {this.state.name}
          {this.state.show ? <span>&hearts;</span> : false}
        </span>
        <input
          placeholder="Name"
          className="inputLine"
          onChange={e => this.setState({ userInput: e.target.value })}
        />
        <button
          className="confirmationButton"
          onClick={() => this.handleClick()}
        >
          See
        </button>
        <span className="resultsBox revelatoryPB">
          You have not been overcome by temptation except that which is common
          to man. God is faithful, and he will not temp you beyond what you can
          bear. And when you do face temptation, he will also provide a way of
          escape so that <em>You Can Endure</em>
        </span>
      </div>
    );
  }
}

export default Revelation;
