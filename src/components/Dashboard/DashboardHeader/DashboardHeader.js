import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const DashboardHeader = () => {
    const {admin,logOut} = useAuth();
    // console.log(admin)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="ms-auto">
      <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
      {admin ? <Nav.Link as={HashLink} to="/makeAdmin">Make a Admin</Nav.Link>
       : <Nav.Link as={HashLink} to="/myOrder">My Order</Nav.Link>}
      {admin ? <Nav.Link as={HashLink} to="/addProduct">Add Products</Nav.Link>
        : <Nav.Link as={HashLink} to="/payment">Payment</Nav.Link>}
      {admin ? <Nav.Link as={HashLink} to="/manageProduct">Manage Products</Nav.Link>
      : <Nav.Link as={HashLink} to="/review">Review</Nav.Link>}
      

    <Button onClick={logOut} className="btn btn-secondary">Logout</Button> 
    </Nav>
    <Nav>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default DashboardHeader;