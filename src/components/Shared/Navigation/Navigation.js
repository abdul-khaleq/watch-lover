import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
  const {user,logOut} = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Watch</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="ms-auto">
      <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/explore">Explore</Nav.Link>
      <Nav.Link as={HashLink} to="/dashboard">Dashboard</Nav.Link>
      

      {user?.email &&  <Button onClick={logOut} color="inherit">Logout</Button> }
      {!user?.email && <Nav.Link as={HashLink} to="/login">Login</Nav.Link> }
      {!user?.email &&  <Nav.Link as={HashLink} to="/register">Register</Nav.Link> }


    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#memes">
        {user?.displayName}
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Navigation;