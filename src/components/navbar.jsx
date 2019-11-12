import React from "react";

export const Navbar = (props) => {
    return (
      <nav className="navbar navbar-light bg-dark">
        <a className="navbar-brand" href="www.google.com">
          <span style={{ color: "#fff" }}>
            Items selected from
            <span className="badge badge-success m-2">{props.counter}</span>
            categorie(s){" "}
          </span>
        </a>
      </nav>
    );
}
