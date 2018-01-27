import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        {
          name: "Cody",
          alias: "Cocobutter",
          mantle: "Child of God"
        },
        {
          mantle: "Shogun",
          age: 21,
          boolean: false
        },
        {
          name: "aleesha",
          daughter: "Riley",
          wallet: 10000
        },
        {
          name: "Kenzie",
          age: 15,
          wallet: 13
        }
      ],
      userInput: "",
      filteredArray: []
    };
  }
  solveToy() {
    let setUpArray = [];
    this.state.unFilteredArray.forEach(
      val => (val[this.state.userInput] ? setUpArray.push(val) : false)
    );
    this.setState({ filteredArray: setUpArray });
    return console.log(this.state.unFilteredArray);
  }
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={e =>
            this.setState({
              userInput: e.target.value
            })
          }
        />
        <button
          className="confirmationButton"
          onClick={() => this.solveToy()}
        />
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
