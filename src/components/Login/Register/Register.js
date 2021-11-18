import React, { useState } from 'react';
import { Alert, Button, Container, Form, Nav, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const location = useLocation();
const {user,authError, registerUser, isLoading,signInWithGoogle} = useAuth();
console.log(authError)

const handleOnBlur = e => {
  const field = e.target.name;
  const value = e.target.value;
  const newLoginData = { ...loginData };
  newLoginData[field] = value;
  setLoginData(newLoginData);
  // console.log(newLoginData)
}
  const handleLoginSubmit = e =>{
  registerUser(loginData.email, loginData.password,loginData.name, history) ;
  e.preventDefault();
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history)
}
    return (
        <div>
          <Navigation/>
          <Container>
            <h1>Register</h1>
            {isLoading && <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>}
{user?.email && <Alert key='success' variant='success'>
User creating  successfully
  </Alert>}
        { <Form onSubmit={handleLoginSubmit}>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Control type="text" name="name" onBlur={handleOnBlur} placeholder="Name" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Control type="email" name="email" onBlur={handleOnBlur} placeholder="Enter email" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Control type="password" name="password" onBlur={handleOnBlur} placeholder="Password" />
</Form.Group>

<Button variant="primary" type="submit">
Submit
</Button>
<Nav.Link as={HashLink} to="/login">Already have an account? please Login</Nav.Link>
{authError && <Alert variant="danger">{authError}</Alert>}
</Form>}

<p>----------------------</p>
  <h2>Please Login using Google</h2> <br />
            <button onClick={handleGoogleSignIn} className="btn btn-warning">Google Sign In</button>
        </Container>
        </div>
    );
};

export default Register;