import { number } from "prop-types";
import React, { Component } from "react";

const withCounter = OldComponent => {
  class NewComponent extends Component {
    constructor() {
      super();
      this.state = {
        number: 0,
      };
    }

    ClickHandler = () => {
      this.setState((prevState) => ({
        number: prevState.number + 1,
      }));
    };

    render() {
      return (
        <OldComponent ClickHandler={this.ClickHandler} number={this.state.number} />
      );
    }
  }
  return NewComponent;
};
export default withCounter;
