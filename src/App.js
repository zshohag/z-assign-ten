import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Container,NavDropdown,Carousel } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">One-Care</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Services</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 "
      src="https://images.pexels.com/photos/5340274/pexels-photo-5340274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={300}>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/415779/pexels-photo-415779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}

export default App;
