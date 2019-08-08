import React, { Component } from 'react';
import '../styles/Banner2.css';
import Button from 'react-bootstrap/Button';

export default class Banner2 extends Component {
  render() {
    return (
      <div className="banner2-container">
        <div className="banner2-content">
          <h3 className="banner2-header">LOREM IPSUM</h3>
          <p className="banner2-text">Lorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor si</p>
          <Button className="banner2-button">Learn more</Button>
        </div>
      </div>
    )
  }
}
