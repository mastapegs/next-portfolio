import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setName("");
    setEmail("");
    setMessage("");
    setDisabled(false);
  }
  const handleShow = () => setShow(true);

  const handleSubmit = async event => {
    event.preventDefault();
    setDisabled(true);
    console.table({
      name,
      email,
      message
    });
    const response = await fetch("/api/contactSubmits", {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        name,
        email,
        message
      })
    });
    const responseJSON = await response.json();
    handleShow();
  }

  return (
    <>
      <Jumbotron>
        <h1>Contact me!</h1>
        <p>
          Your friendly neighborhood web developer 🕸️
        </p>
      </Jumbotron>
      <Container>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>😀 Thank you for reaching out to me!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              📧 I'll make sure to email you back at <strong>{email}</strong>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <p>
              🙏🏻 Thank you again {name}!
            </p>
          </Modal.Footer>
        </Modal>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              name="name"
              value={name}
              onChange={() => setName(event.target.value)} />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Your Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={() => setEmail(event.target.value)} />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Your Message</Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              placeholder="Your message"
              name="message"
              value={message}
              onChange={() => setMessage(event.target.value)} />
          </Form.Group>
          <Button disabled={disabled} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Contact;