import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className='container-fluid bg'>
     <Container>
        <Row xs={1} md={2} lg={2}>
        <Col md={{ order: 1 }}>
            <a href="#"> LOCATION</a>
            <a href="#products"> PRODUCTS</a>
            <a href="#contact"> CONTACT US</a>
            <a href="#reviews">REVIEWS</a>
            <a href="#"> BACK TO PAGE TOP</a>
         </Col>
         <Col md={{ order: 12 }}>
         <p className="color-white">Copyright by watchBoss 2021. All rights reserved</p>
         </Col>
        </Row>
    </Container>
        </div>
    );
};

export default Footer;