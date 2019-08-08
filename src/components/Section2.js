import React, { Component } from 'react';
import '../styles/Section2.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Section2 extends Component {
  render() {
    return (
      <Container className="section2-container">
        <Row className="section2-row">
          <Col className="text-content">
            <h3>LOREM IPSUM</h3>
            Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. At ultrices mi tempus imperdiet nulla malesuada. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Gravida cum sociis natoque penatibus et magnis. Eget arcu dictum varius duis at consectetur lorem donec. Sit amet porttitor eget dolor morbi non arcu risus. Ut tortor pretium viverra suspendisse potenti. Sed sed risus pretium quam vulputate dignissim suspendisse. Faucibus purus in massa tempor nec feugiat nisl pretium. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt.
            <a href="#"> Learn more...</a>
          </Col>
          <Col className="grid-icons">
            <Container>
              <Row>
                <Col className="grid-column"><div className="image-border"><img className="home-icons" src={require(`../resources/home-expertise.svg`)} alt="" /></div></Col>
                <Col className="grid-column"><div className="image-border"><img className="home-icons" src={require(`../resources/home-hygiene.svg`)} alt="" /></div></Col>
              </Row>
              <Row>
                <Col><p className="home-icons">Lorem</p></Col>
                <Col><p className="home-icons">Ipsum</p></Col>
              </Row>
              <Row>
                <Col className="grid-column"><div className="image-border"><img className="home-icons" src={require(`../resources/home-lab.svg`)} alt="" /></div></Col>
                <Col className="grid-column"><div className="image-border"><img className="home-icons" src={require(`../resources/home-retention.svg`)} alt="" /></div></Col>
              </Row>
              <Row>
                <Col><p className="home-icons">Ipsum</p></Col>
                <Col><p className="home-icons">Lorem</p></Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    )
  }
}
