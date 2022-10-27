import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './SiteNav.css';
import LinkContainer from 'react-router-bootstrap/LinkContainer';

function SiteNav() {
  return (
    <Navbar className='darkgrey shadow-small' expand="lg">
      <Container>
      <LinkContainer to="/"><Navbar.Brand  className='fst-italic fw-semibold text-white'href="#home">Game Ne<span className="red">x</span>us</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="/"><Nav.Link className="grey fw-light">Store</Nav.Link></LinkContainer>
            <Nav.Link href="#link" className="grey fw-light">Browse</Nav.Link>
            <LinkContainer to="/game"><Nav.Link className="grey fw-light">About</Nav.Link></LinkContainer>
            <Nav.Link href="#link" className="grey fw-light">Support</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="text-white">Log in</Nav.Link>
            <Nav.Link href="#memes"><span className=" red">Sign Up</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SiteNav;