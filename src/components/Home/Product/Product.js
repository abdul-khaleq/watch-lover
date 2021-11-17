import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name, image, description, _id } = props.product;
    return (
        <div>
             <Col>
      <Card className="pb-3">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
    {description}
          </Card.Text>
        </Card.Body>
        <Link to={`/buynow/${_id}`}><button className="btn btn-success">Buy Now</button> </Link> 
      </Card>
    </Col>
        </div>
    );
};

export default Product;