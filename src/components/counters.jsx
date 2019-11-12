import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      {
        id: "1",
        value: "0",
        item: "Discs"
      },
      {
        id: "2",
        value: "4",
        item: "Bands"
      },
      {
        id: "3",
        value: "0",
        item: "Shirts"
      },
      {
        id: "4",
        value: "0",
        item: "Games"
      },
      {
        id: "5",
        value: "0",
        item: "Books"
      }
    ]
  };

  handleDelete = (counterId) => {
      const counters = this.state.counters.filter(c => c.id !==counterId)
      // while it can be done but we DO NOT HAVE TO do counters: counters 
      // because the key and the value are the same. 
      this.setState({counters})
  }

  render() {
    return (
      <>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} id ={counter.id} item={counter.item} onDelete={this.handleDelete}>
            <div className="m-2">
              <h5>{counter.item}</h5>
              <hr />
            </div>
          </Counter>
        ))}
      </>
    );
  }
}

export default Counters;
