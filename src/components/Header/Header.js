import React from 'react';
import '../Bootstrap/bootstrap.min.css'
import './Header.css'
import { Navbar , Container, Nav, NavDropdown} from 'react-bootstrap';


const Header = () => {
    return (
        <div>
            <div>
            <div>
            <Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">RPO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#blog">Blog</Nav.Link>
      <NavDropdown title="English" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">German</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Spanish</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">More</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#info"> More Info</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Log in
      </Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
            </Navbar>
            </div>
            <div className='head-title'>
            <h1 >Restaurent Prime Over</h1>
            <small>Make over your restaurent with professional touch</small>
            </div>
        </div>
        <div>
        <Nav className="justify-content-center nav-color" bg="dark" variant="light" activeKey="/home">
    <Nav.Item>
      <NavDropdown title="HOME" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Biography</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Address</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">More</NavDropdown.Item>
      </NavDropdown>
    </Nav.Item>
    <Nav.Item>
    <NavDropdown title="PAGES" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Collection</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Brand</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Info</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">More</NavDropdown.Item>
      </NavDropdown>
    </Nav.Item>
    <Nav.Item>
    <NavDropdown title="SHOP" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Zip</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Fax</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Address</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">More</NavDropdown.Item>
      </NavDropdown>
    </Nav.Item>
    <Nav.Item>
    <NavDropdown title="PURCHASE" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Order</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Shipment</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">About</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">More</NavDropdown.Item>
      </NavDropdown>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Detail
      </Nav.Link>
    </Nav.Item>
  </Nav>
        </div>
        </div>
    );
};

export default Header;