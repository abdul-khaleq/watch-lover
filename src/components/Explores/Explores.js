import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Explore from '../Explore/Explore';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Explores = () => {
    const [explores, setExplores] = useState([]);
    // Loading Data 
    useEffect(() => {
        fetch('https://afternoon-shelf-50405.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setExplores(data);
            })
    }, [])
    return (
        <div>
            <Navigation/>
            {/* render services from server side */}
            <Container className='py-5'>
                <h1 className='pb-3'>Products</h1>
                <Row xs={1} md={2} lg={3} className="g-4">
                {
                    explores.map(explore =><Explore explore={explore}></Explore>)
                }
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Explores;