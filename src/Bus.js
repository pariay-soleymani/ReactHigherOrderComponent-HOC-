import React, { Component } from "react";
import HOCComponent from "./HOCComponent";

class Bus extends Component {
  render() {
    const { number, ClickHandler, tires } = this.props;
    return (
      <div>
        <button type="button" onClick={ClickHandler}>
          bus plus one
        </button>
        <p>Number of buses : {number}</p>
        <p>Number of Tires : {tires}</p>
      </div>
    );
  }
}

export default HOCComponent(Bus , 1);
