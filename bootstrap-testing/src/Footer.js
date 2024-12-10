import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './Footer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';




function Footer() {
  // State for form validation
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container fluid className="footer-header-color">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row id="contact" className="text-center p-2">
          <Col className="text-center">
            <h1 className="bio-font font-color-class heading-responsive-font">
              Contact Me
            </h1>
          </Col>
        </Row>

        <Row id="contact" className="text-center mt-2 p-2">
          <Col className="text-center" xs={12} sm={12} md={4}></Col>
          <Col className="text-center" xs={12} sm={12} md={4}>
            <Form.Group controlId="validationName">
              <Form.Control
                required
                type="text"
                placeholder="Name"
                className="me-2 custom-border form-control custom-placeholder"
              />
              <Form.Control.Feedback type="invalid">
                Please provide your name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col className="text-center" xs={12} sm={12} md={4}></Col>
        </Row>

        <Row id="contact" className="text-center mt-2 p-2">
          <Col className="text-center" xs={12} sm={12} md={4}></Col>
          <Col className="text-center" xs={12} sm={12} md={4}>
            <Form.Group controlId="validationEmail">
              <Form.Control
                required
                type="email"
                placeholder="Email"
                className="me-2 custom-border form-control custom-placeholder"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col className="text-center" xs={12} sm={12} md={4}></Col>
        </Row>

        <Row id="contact" className="text-center mt-2 p-2">
          <Col className="text-center" xs={12} sm={12} md={4}></Col>
          <Col className="text-center" xs={12} sm={12} md={4}>
            <Form.Group controlId="validationMessage">
              <Form.Control
                required
                as="textarea"
                placeholder="Message"
                className="me-2 custom-border form-control custom-placeholder message-inp"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a message.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col className="text-center" xs={12} sm={12} md={4}></Col>
        </Row>

        <Row id="contact" className="text-center p-2">
          <Col className="text-center">
            <Button type="submit" className="button-custom-color">
              Submit
            </Button>
          </Col>
        </Row>

        <Row id="contact" className="text-center p-2">
          <Col className="text-center">
            <div className="mb-2">
              © 2025 Copyright:
              <a className="copyright" href="https://meabhi.me/">
                {' '}
                meabhi.me
              </a>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Footer;