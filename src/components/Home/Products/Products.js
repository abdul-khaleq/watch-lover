import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    // Loading Data 
    useEffect(() => {
        fetch('https://afternoon-shelf-50405.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                // console.log(data);
            })
    }, [])
    return (
        <div id="products">
            {/* render services from server side */}
            <Container className='py-5'>
                <h1>Products</h1>
                <Row xs={1} md={2} lg={3} className="g-4">
                {
                    products?.slice(0,6).map(product =><Product product={product}></Product>)
                }
                </Row>
            </Container>
        </div>
    );
};

export default Products;