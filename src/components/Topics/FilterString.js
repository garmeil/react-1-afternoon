import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: ["Cody", "Body", "Boobear"],
      userInput: "",
      filteredArray: []
    };
  }
  //Setting Goals
  //filter through unfilteredArray to see which includes userInput
  //set filtered array in array and,
  //Set the state of filteredArray with new array
  filterString() {
    //extracredit case insensitive ;)
    let re = new RegExp(this.state.userInput, "gi");
    let filteredArray = this.state.unFilteredArray.filter(val => val.match(re));
    console.log("here");
    this.setState({ filteredArray: filteredArray });
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>FilterString</h4>
        <span className="puzzleText">
          {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.setState({ userInput: e.target.value })}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterString()}
        >
          Clean
        </button>
        <span className="resultsBox filterStringRB">
          {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterString;
