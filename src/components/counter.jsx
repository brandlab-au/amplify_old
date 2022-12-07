import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

class Counter extends Component {
  state = {
    count: this.props.count,
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

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>No tags yet pleaese add</p>;
  //     return (
  //       <ul>
  //         {/* working on min 52:43 */}
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  render() {
    console.log("pro", this.props);
    return (
      <div>
        <span style={this.styles}>
          Data from James {this.formatCount()} :<br></br>
        </span>
        <button className={this.gerbadgeClasses()}>{this.formatCount()}</button>
        <button
          className={this.gerbadgeClasses()}
          onClick={this.handleIncreament}
        >
          Click here
        </button>
        <button
          onClick={() => this.props.handleDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.renderTags()} */}
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
