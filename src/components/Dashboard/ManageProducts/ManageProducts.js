import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect( ()=>{
        fetch('https://afternoon-shelf-50405.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleDelete = id =>{
        const proceed = window.confirm("Are you are to delete?")
        if(proceed){
            const url =`https://afternoon-shelf-50405.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){
                alert('Deleted successfully')
                const remaining = products.filter( product =>  product._id !== id);
                setProducts(remaining)
            } 
        })
        }
    }
    return (
        <div>
            <h2>Manage Products</h2>
            <Container className='py-5'>
                <Row xs={1} md={2} lg={3} className="g-4">

                {products.map(product => <Col>
      <Card className="pb-3">
        <Card.Img variant="top" src={product?.image} />
        <Card.Body>
          <Card.Title>{product?.name}</Card.Title>
          <Card.Text>
    {product?.description}
          </Card.Text>
        </Card.Body>
        <button className="btn btn-danger" onClick={()=>handleDelete(product?._id)}>Delete</button> 
      </Card>
            </Col>)
}
                </Row>
            </Container>
        </div>
    );
};

export default ManageProducts;