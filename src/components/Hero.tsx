import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Hero() {
  return (
    <div className="hero-bg">
      <Container fluid className="hero-container">
        <Row className="align-items-center hero-content">
          <Col md={6} className="text-center text-md-left">
            <div className="vertically-centered">
              <h1>Welcome to Your Website</h1>
              <p>A beautifully designed website to showcase your content.</p>
              <Button variant="light">Learn More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
