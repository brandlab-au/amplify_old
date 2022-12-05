import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

class Counter extends Component {
  state = {
    count: 10,
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  handleIncreament = () => {
    console.log("clicked");
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="jumbotron text-center">
        <span style={this.styles}>
          Data from Counter {this.formatCount()} :<br></br> James here we go
          <br></br>
        </span>
        <button
          className="btn btn-primary btn-sm"
          onClick={this.handleIncreament}
        >
          Click here
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
