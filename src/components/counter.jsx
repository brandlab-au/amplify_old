import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

class Counter extends Component {
  state = {
    count: 0,
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

  gerbadgeClasses() {
    let classes = "btn m-2 btn-";
    classes += this.state.count === 0 ? "warning btn-sm" : "primary btn-sm";
    return classes;
  }

  render() {
    return (
      <div>
        <span style={this.styles}>
          Data from Counter {this.formatCount()} :<br></br>
          <br></br>
        </span>
        <button className={this.gerbadgeClasses()}>{this.formatCount()}</button>
        <button
          className={this.gerbadgeClasses()}
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
