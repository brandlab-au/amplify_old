import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

class Counter extends Component {
  state = {
    count: 10,
  };

  render() {
    return (
      <div>
        <span>Data from Counter {this.formatCount()} : James here we go </span>
        <button>inc</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
