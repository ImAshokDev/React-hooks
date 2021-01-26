import React, { Component } from "react";

class ClassCounterTwo extends Component {
  state = {
    count: 0,
  };

  incrementFunc = () => {
    this.setState((prev) => {
      return {
        count: prev.count + 1,
      };
    });
  };

  decrementFunc = () => {
    this.setState((prev) => {
      return {
        count: prev.count - 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Class Counter two</h1>
        <button onClick={this.incrementFunc} type="button">
          +
        </button>
        <h3>Count : {this.state.count}</h3>
        <button onClick={this.decrementFunc} type="button">
          -
        </button>
      </div>
    );
  }
}

export default ClassCounterTwo;
