import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <Navbar bg="dark">
        <Navbar.Brand href="#home">
          <img
            src="../resources/logo-white.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Roostergrin"
          />
        </Navbar.Brand>
      </Navbar>
    )
  }
}
