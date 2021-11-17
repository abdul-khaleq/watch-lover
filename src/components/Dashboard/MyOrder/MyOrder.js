import React, {useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const {productId} = useParams();
    const {user} =useAuth();
    const [orders, setOrders] = useState([]);
    const email =user?.email;
    // console.log(orders)
    useEffect(()=>{
        fetch(`https://afternoon-shelf-50405.herokuapp.com/orders/${email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[orders]);

    const handleCancel = (id) =>{
        console.log(id)
        fetch(`https://afternoon-shelf-50405.herokuapp.com/orders/${email}`,{
      method:"DELETE",
    })
    .then(res =>res.json())
    .then(data => console.log(data))
    }
    return (
        <div>
            <Container className='py-5'>
                <h1>Orders</h1>
                <Row xs={1} md={2} lg={3} className="g-4">
                {
                    orders?.map(order =><Col>
                        <Card className="pb-3">
                          <Card.Img variant="top" src={order?.pinfo?.image} />
                          <Card.Body>
                            <Card.Title>{order?.pinfo?.price}</Card.Title>
                            <Card.Title>{order?.pinfo?.name}</Card.Title>
                            <Card.Text> {order?.pinfo?.description}</Card.Text>
                          </Card.Body>
                          <button onClick={()=>handleCancel(email)} className="btn btn-success">Cancel</button>
                        </Card>
                      </Col>)
                }
                </Row>
            </Container>
        </div>
    );
};

export default MyOrder;