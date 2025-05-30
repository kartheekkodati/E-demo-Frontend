import React, { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Header = () => {
  const { getCartItemsCount } = useContext(CartContext);
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">E-Commerce Demo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
              {getCartItemsCount() > 0 && (
                <Badge pill bg="danger" className="ms-1">
                  {getCartItemsCount()}
                </Badge>
              )}
            </Nav.Link>
            <NavDropdown title="E-Info" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/e-info">E-Info Home</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/e-info/system-design">System Design</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/e-info/dsa">DSA</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/e-info/oops">OOPS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/e-info/database">Database</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/e-info/rest-api">REST API</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/e-info/kafka">Kafka</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
