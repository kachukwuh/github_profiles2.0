import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <i className="fab fa-github fa-3x"></i>
            <h2>GitHub Profile Finder</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
