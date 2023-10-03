import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Us</h5>
            <p>
              Your footer content goes here. You can provide information about your company or website.
            </p>
          </Col>
          <Col md={6}>
            <h5>Contact Information</h5>
            <address>
              <p>Email: example@example.com</p>
              <p>Phone: +1234567890</p>
              <p>Address: 123 Main St, City, Country</p>
            </address>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
