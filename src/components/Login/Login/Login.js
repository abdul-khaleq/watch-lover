import React, { useState } from 'react';
import { Alert, Button, Container, Form, Nav, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user,isLoading,authError,loginUser,signInWithGoogle} =useAuth();
  
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
  
    const handleOnChange= e =>{
      const field =e.target.name;
      const value =e.target.value;
      console.log(field, value)
      const newLoginData = {...loginData}
      newLoginData[field] =value;
      setLoginData(newLoginData)
      // console.log(newLoginData)
  
    }
    const handleLoginSubmit = e =>{
      loginUser(loginData.email, loginData.password, location, history);
      e.preventDefault();
  
    }
    const handleGoogleSignIn = () => {
      signInWithGoogle(location, history)
  }
    return (
        <Container>

     <h1>Login</h1>
     {isLoading && <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>}
{user?.email && <Alert key='success' variant='success'>
User creating  successfully
  </Alert>}
  
    <Form onSubmit={handleLoginSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" name="email" onChange={handleOnChange} placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" name="password" onChange={handleOnChange} placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Nav.Link as={HashLink} to="/register">New User? Please Register</Nav.Link>
</Form>
  {authError && <Alert variant="danger">{authError}</Alert>}

  <p>----------------------</p>
  <h2>Please Login using Google</h2> <br />
            <button onClick={handleGoogleSignIn} className="btn btn-warning">Google Sign In</button>
        </Container>
    );
};

export default Login;