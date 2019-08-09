import React, { Component } from 'react';
import '../styles/Hero.css';
import Button from 'react-bootstrap/Button';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero-container">
        <img className="top-logo" src={require(`../resources/logo-white.svg`)} alt="" />
        <div className="content">
          <h2>WELCOME TO</h2>
          <h3>Rooster Grin</h3>
          <Button className="hero-button" href="https://www.roostergrin.com/">Let's get started</Button>
        </div>
      </div>
    )
  }
}
