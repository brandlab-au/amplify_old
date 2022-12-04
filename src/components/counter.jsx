import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 10,
  };

  render() {
    return (
      <div>
        <h1>Data from Counter {this.state.count} : James here we go </h1>
        <button>inc</button>
      </div>
    );
  }
}

export default Counter;
