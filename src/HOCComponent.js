import { number } from "prop-types";
import React, { Component } from "react";

const withCounter = (OldComponent, step) => {
  class NewComponent extends Component {
    constructor() {
      super();
      this.state = {
        number: 0,
      };
    }

    ClickHandler = () => {
      this.setState((prevState) => ({
        number: prevState.number + step,
      }));
    };

    render() {
      return (
        <OldComponent ClickHandler={this.ClickHandler} number={this.state.number} {...this.props}/>
      );
    }
  }
  return NewComponent;
};
export default withCounter;
