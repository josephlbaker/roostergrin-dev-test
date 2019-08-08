import React, { Component } from 'react';
import '../styles/Hero.css';
import Button from 'react-bootstrap/Button';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero-container">
        <div className="content">
          <h2>WELCOME TO</h2>
          <h3>Rooster Grin</h3>
          <Button href="https://www.roostergrin.com/">Let's get started</Button>
        </div>
      </div>
    )
  }
}
