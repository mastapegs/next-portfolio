import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'
const Index = () => {
  return (
    <>
      <Jumbotron>
        <h1>Hello, World!</h1>
        <p>
          NextJS web application
        </p>
        <p>
          <Link href="contact" passHref>
              <Button variant="primary">Contact Me!</Button>
          </Link>
        </p>
      </Jumbotron>
    </>
  );
}
export default Index;