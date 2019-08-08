import React, { Component } from 'react';
import '../styles/Section3.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

export default class Section3 extends Component {
  render() {
    return (
      <Container className="section3-container">
        <Row className="section3-row">
          <Col className="section3-column">
            <div className="review-content">
              <h3>LOREM IPSUM <br />DOLOR SIT AMET</h3>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
          </Col>
          <Col>
            <Carousel>
              <Carousel.Item>
                <h3 className="section3-header">John Doe 8/1/2016</h3>
                <p className="section3-text">Lorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor si</p>
              </Carousel.Item>
              <Carousel.Item>
                <h3 className="section3-header">Jane Doe 9/2/2018</h3>
                <p className="section3-text">Lorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor si</p>
              </Carousel.Item>
              <Carousel.Item>
                <h3 className="section3-header">Dave Smith 10/5/2019</h3>
                <p className="section3-text">Lorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor si</p>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <div className="media-links">
          <p>Follow Us</p>
          <img className="insta-logo" src={require(`../resources/instagram.svg`)} alt="" />
          <img className="fb-logo" src={require(`../resources/facebook.svg`)} alt="" />
        </div>
      </Container>
    )
  }
}
