import React, { Component } from "react";
import HOCComponent from "./HOCComponent";
class Cars extends Component {
  render() {
    const { number, ClickHandler } = this.props;
    return (
      <div>
        <button type="button" onClick={ClickHandler}>
          {" "}
          car plus five
        </button>
        <p>Number of cars : {number}</p>
      </div>
    );
  }
}

export default HOCComponent(Cars , 5);
