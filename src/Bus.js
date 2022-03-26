import React, { Component } from "react";
import HOCComponent from "./HOCComponent";

class Bus extends Component {
  render() {
    const { number, ClickHandler } = this.props;
    return (
      <div>
        <button type="button" onClick={ClickHandler}>
          bus plus one
        </button>
        <p>Number of buses : {number}</p>
      </div>
    );
  }
}

export default HOCComponent(Bus);
