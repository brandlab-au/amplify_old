import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (counterid) => {
    // console.log("delete", counterid);
    const counters = this.state.counters.filter((c) => c.id !== counterid);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            count={counter.value}
            handleDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
          ></Counter>
          //   <Counter key={counter.id}>
          //     value={counter.value}
          //     <h4>Nice #{counter.id}</h4>
          //   </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
