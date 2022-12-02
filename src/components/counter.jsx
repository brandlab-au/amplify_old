import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 10,
  };

  render() {
    return (
      <div>
        <h1>This is stuff in Counter {this.state.count}</h1>
        <button>inc</button>
      </div>
    );
  }
}

export default Counter;
