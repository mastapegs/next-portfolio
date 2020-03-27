import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const Contact = () => {
  return (
    <>
      <Jumbotron>
        <h1>Contact me!</h1>
        <p>
          Your friendly neighborhood web developer 🕸️
        </p>
      </Jumbotron>
      <Container>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Your name" />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Your Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" row="4" placeholder="Your message" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Contact;