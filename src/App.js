import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import { Navbar } from "./components/navbar";

class App extends Component {
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

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    // while it can be done but we DO NOT HAVE TO do counters: counters
    // because the key and the value are the same.
    this.setState({ counters });
  };

  handleRemove = counter => {
    if (counter.value < 1) return;
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = "0";
      return c;
    });
    console.log(counters);
    this.setState({ counters });
  };
  render() {
    return (
      <div className="App">
        <Navbar counter={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters = {this.state.counters}
            onIncrement={this.handleIncrement}
            onRemove={this.handleRemove}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </div>
    );
  }
}

export default App;
