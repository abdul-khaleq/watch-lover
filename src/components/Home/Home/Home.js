import React from 'react';
import UserShowReview from '../../Dashboard/UserShowReview/UserShowReview';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Contact></Contact>
            <UserShowReview></UserShowReview>      
        </div>
    );
};

export default Home;