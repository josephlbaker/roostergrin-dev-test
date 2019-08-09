import React, { Component } from 'react';
import '../styles/Banner1.css';
import Button from 'react-bootstrap/Button';

export default class Banner1 extends Component {
  render() {
    return (
      <div className="banner1-container">
        <div className="banner1-content">
          <h3 className="banner1-header">LOREM IPSUM</h3>
          <Button href="https://www.roostergrin.com/">Learn more</Button>
        </div>
      </div>
    )
  }
}
