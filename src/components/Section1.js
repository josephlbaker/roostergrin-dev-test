import React, { Component } from 'react';
import '../styles/Section1.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Banner1 extends Component {
  render() {
    return (
      <Container className="section1-container">
        <Row className="section1-row">
          <Col>
            <div className="section1-content">
              <h3>LOREM IPSUM</h3>
              <p>Eget arcu dictum varius duis at consectetur lorem donec. Sit amet porttitor eget dolor morbi non arcu risus. Ut tortor pretium viverra suspendisse potenti. Sed sed risus pretium quam vulputate dignissim suspendisse. Faucibus purus in massa tempor nec feugiat nisl pretium. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt.</p>
              <a href="#">> Learn more</a>
            </div>
          </Col>
          <Col className="image-content1"></Col>
        </Row>
      </Container>
    )
  }
}
