import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { useState } from 'react'

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
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
    console.table(responseJSON);
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

        <Alert variant="warning">
          <Alert.Heading>🚧 Still Implementing Back-end</Alert.Heading>
          <p>
            I'm still in the process of building out the back-end of this form to actually get your message from you, to me.
          </p>
          <hr />
          <p>
            I do console.table the form data onSubmit if you'd like to test it out 😉
          </p>
        </Alert>
        <hr />

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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Contact;