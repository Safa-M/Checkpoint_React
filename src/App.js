import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form,Navbar,Nav,FormControl,Card, Container} from 'react-bootstrap';
function App() {
  return (
    <container className="bod">
    <div className="App">
      <>
  <Navbar className="nav" bg="dark" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Subjects</Nav.Link>
      <Nav.Link href="#pricing">Help & Support</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
</>
<div className="card">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://i.picsum.photos/id/1010/5184/3456.jpg?hmac=7SE0MNAloXpJXDxio2nvoshUx9roGIJ_5pZej6qdxXs" />
  <Card.Body>
    <Card.Title>Online Library</Card.Title>
    <Button variant="primary">Read more, Live better.</Button>
    <Card.Text>
    </Card.Text>
  </Card.Body>
</Card>
</div>
<p variant="primary">
Sign up for or restore account access</p>

<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted" color="#dce0e7">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Agree to terms and conditions" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Subscribe
  </Button>
</Form>

</div>
</container>
  );
}

export default App;
