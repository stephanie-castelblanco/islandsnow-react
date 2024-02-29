import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Button, Col, Container, Image, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { Cart, Facebook, HouseFill, Instagram, PersonFill, Pinterest, Search, Twitter } from 'react-bootstrap-icons';

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
            <NavDropdown.Item></NavDropdown.Item>
            <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
);

const Logo = () => (
    <Row className="justify-content-md-center py-3">
      <Col md="auto">
        <Image fluid rounded mx="auto" d="block" src="experience-islandsnow-bootstrap-logo.png" alt="Island Snow Hawaii Logo"/>
      </Col>
    </Row>
);

const SecondMenu = () => (
    <Nav className="justify-content-md-center py-3">
      <NavDropdown title={"MEN"}/>
      <NavDropdown title={"WOMEN"}/>
      <NavDropdown title={"KIDS"}/>
      <NavDropdown title={"BRANDS"}/>
      <Nav.Link>SEARCH</Nav.Link>
    </Nav>
);

const MainImage = () => (
    <Row className="justify-content-md-center pt-3">
      <Col md="auto">
        <Image fluid src="experience-islandsnow-bootstrap-main.png"/>
      </Col>
    </Row>
);

const FooterMenu = () => (
    <footer className="py-3">
      <Container>
        <Row>
          <Col>
            NAVIGATION
            <hr/>
            <p>About Us</p>
            <p>Employment</p>
            <p>Videos</p>
          </Col>
          <Col>
            MAIN MENU
            <hr/>
            <p>Men</p>
            <p>Women</p>
            <p>Kids</p>
          </Col>
          <Col>
            CONNECT
            <hr/>
            <p>Sign up for the latest updates</p>
            <input type="text" placeholder="Enter Email Address"/>
            <Button variant="dark">Join</Button>
          </Col>
        </Row>
      </Container>
    </footer>
);

const IslandSnow = () => (
    <>
      <TopMenu/>
      <Logo/>
      <SecondMenu/>
      <MainImage/>
      <FooterMenu/>
    </>
);

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));
