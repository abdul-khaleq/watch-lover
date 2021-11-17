import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';

const UserShowReview = () => {
    const [reviews, setReviews] = useState();
    // console.log(reviews)
    useEffect(() => {
        fetch('https://afternoon-shelf-50405.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
      <Container id="reviews" className='py-5'>
          {/* render services from server side */}
                <h1>Reviews</h1>
                <Row xs={1} md={2} lg={3} className="g-4">
                {
                    reviews?.map(review => <Col>
                        <Card className="pb-3">
                          <Card.Body>
                            <Card.Title><Rating
                                            initialRating={review?.rating}
                                            emptySymbol="far fa-star text-warning "
                                            fullSymbol="fas fa-star text-warning "
                                            readonly
                                        /></Card.Title>
                            <Card.Title>{review?.name}</Card.Title>
                            <Card.Text>{review?.sDescription}</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>)
                }
                </Row>
            </Container>
    );
};

export default UserShowReview;