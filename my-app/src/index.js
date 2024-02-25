import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for ReactDOM
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Nav, Navbar, NavDropdown, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { Cart, Facebook, HouseFill, Instagram, PersonFill, Pinterest, Search, Twitter } from 'react-bootstrap-icons';
import Image from 'react-bootstrap/Image';
import logo from './experience-islandsnow-bootstrap-logo.png';
import fullWidthImage from './experience-islandsnow-bootstrap-main.png';

const TopMenu = () => (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav className="me-auto">
          <Nav.Link><Facebook/></Nav.Link>
          <Nav.Link><Twitter/></Nav.Link>
          <Nav.Link><Pinterest/></Nav.Link>
          <Nav.Link><Instagram/></Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link><HouseFill/> </Nav.Link>
          <Nav.Link><Search/> </Nav.Link>
          <Nav.Link><PersonFill/> </Nav.Link>
          <NavDropdown title={<Cart/>}>
            <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
);


const IslandSnowLogo = () => (
    <Row>
      <Col>
        <Image src={logo} alt="Island Snow Logo" fluid rounded className="mx-auto d-block py-3" />
      </Col>
    </Row>
);

const MiddleMenu = () => (
    <Container>
      <Row className="justify-content-center pt-4">
        <Col xs={1}>
          <Dropdown>
            <Dropdown.Toggle variant="white"><strong>MEN</strong></Dropdown.Toggle>
          </Dropdown>
        </Col>

        <Col xs={1}>
          <Dropdown>
            <Dropdown.Toggle variant="white"><strong>WOMEN</strong></Dropdown.Toggle>
          </Dropdown>
        </Col>

        <Col xs={1} className="mx-3"> {/* Adjusted margin here */}
          <Dropdown>
            <Dropdown.Toggle variant="white"><strong>KIDS</strong></Dropdown.Toggle>
          </Dropdown>
        </Col>

          <Col xs={1} className="mx-3"> {/* Adjusted margin here */}
            <Dropdown>
            <Dropdown.Toggle variant="white"><strong>BRANDS</strong></Dropdown.Toggle>
          </Dropdown>
        </Col>

        <Col xs={1} className="d-flex justify-content-center align-items-center">
          <strong>SEARCH</strong>
        </Col>
      </Row>
    </Container>
);


function FullWidthImage() {
  return <Image src={fullWidthImage} fluid />;
}

const FooterMenu = () => (
    <footer>
      <Container>
        <Row className="py-3">
          <Col>
            NAVIGATION
            <hr />
            <div>About Us</div>
            <div>Employment</div>
            <div>Videos</div>
          </Col>

          <Col>
            MAIN MENU
            <hr />
            <div>Men</div>
            <div>Women</div>
            <div>Kids</div>
          </Col>

          <Col>
            CONNECT
            <hr />
            <div>Sign up for the latest updates</div>
            <input type="text" placeholder="Enter Email Address" />
            <Button variant="dark">Join</Button>
          </Col>
        </Row>
      </Container>
    </footer>
);

const IslandSnow = () => (
    <Container>
      <TopMenu/>
      <IslandSnowLogo/>
      <MiddleMenu/>
      <FullWidthImage/>
      <FooterMenu/>
    </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IslandSnow />);
