import React from 'react';
import UserShowReview from '../../Dashboard/UserShowReview/UserShowReview';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner></Banner>
            <Products></Products>
            <Contact></Contact>
            <UserShowReview></UserShowReview>
            <Footer></Footer> 
        </div>
    );
};

export default Home;