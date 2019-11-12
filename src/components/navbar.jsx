import React, { Component } from 'react';

export default class Navbar extends Component {
    
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-dark">
                <a className="navbar-brand" href="www.google.com">
                    <span style={{color: "#fff"}}>Total Items in Cart: </span>
                </a>
            </nav>
         );
    }
}