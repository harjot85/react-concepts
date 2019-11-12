import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    console.log(this.props.counter);
    return (
      <nav className="navbar navbar-light bg-dark">
        <a className="navbar-brand" href="www.google.com">
          <span style={{ color: "#fff" }}>
            Items selected from
            <span className="badge badge-success m-2">{this.props.counter}</span>
            categorie(s){" "}
          </span>
        </a>
      </nav>
    );
  }
}
