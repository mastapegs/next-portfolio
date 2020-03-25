import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
const Index = () => {
  return (
    <>
      <Jumbotron>
        <h1>Hello, World!</h1>
        <p>
          NextJS web application
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </>
  );
}
export default Index;