import React, { Component } from 'react';
import '../styles/Section3.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Section3 extends Component {
  render() {
    return (
      <Container>
        <Row className="section3-row">
          <Col className="text-content">
            <h3>LOREM IPSUM</h3>
            Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. At ultrices mi tempus imperdiet nulla malesuada. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Gravida cum sociis natoque penatibus et magnis. Eget arcu dictum varius duis at consectetur lorem donec. Sit amet porttitor eget dolor morbi non arcu risus. Ut tortor pretium viverra suspendisse potenti. Sed sed risus pretium quam vulputate dignissim suspendisse. Faucibus purus in massa tempor nec feugiat nisl pretium. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt.
            <a href="#"> Learn more...</a>
          </Col>
          <Col className="image-content3"></Col>
        </Row>
      </Container>
    )
  }
}
