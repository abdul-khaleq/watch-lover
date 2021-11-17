import Button from '@restart/ui/esm/Button';
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
// import useAuth from '../../hooks/useAuth';
import './BuyNow.css'

const BuyNow = () => {
     const {productId} = useParams();
    //  console.log(productId)
     const [buyNow , setBuyNows] = useState([]);
    const {user} = useAuth();
    const email =user?.email;
    // console.log(email)
    const { register, handleSubmit } = useForm();
    // const email = sessionStorage.getItem("email");

    useEffect(() => {
      fetch(`https://afternoon-shelf-50405.herokuapp.com/products/${productId}`)
          .then(res => res.json())
          .then(data => setBuyNows(data));
  }, []);


  const onSubmit = data => {
    data.email =email;
    data.pinfo =buyNow;
    fetch("https://afternoon-shelf-50405.herokuapp.com/orders",{
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(data)
    })
    alert("Your order has been placed")
  };


    return (
        <div>
          <h1>ok</h1>
            <Container className='py-5'>
                <Row xs={1} md={2} className="g-4">

         <Col>
      <Card className="pb-3">

        <Card.Img variant="top" src={buyNow?.image} />
        <Card.Body>
          <Card.Title>{buyNow?.name}</Card.Title>
          <Card.Title> Price: {buyNow?.price}</Card.Title>
          <Card.Text> {buyNow?.description}</Card.Text>
        </Card.Body>

      </Card>
            </Col>
             <Col>
<div className="add-services">
<form onSubmit={handleSubmit(onSubmit)}>
      <input  id="name" {...register("name", { required: true, maxLength: 80 })}  defaultValue={user?.displayName}/>
      <input {...register("email", { required: true, maxLength: 80 })} defaultValue={user?.email}/>
      <input {...register("address", { required: true, maxLength: 100 })} placeholder="Address"/>
      <input type="number" {...register("number", { required: true })} placeholder="Phone number"/>
      <input className="btn btn-primary" type="submit" value="Order"/>
    </form>
</div>
            </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BuyNow;