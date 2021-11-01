
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import './Destination.css'

const Destinations = () => {

    const [places, SetPlaces] = useState([])

    useEffect(() => {
        fetch('https://dreadful-spirit-11683.herokuapp.com/services')
            .then(res => res.json())
            .then(data => SetPlaces(data))
    }, [])

    return (
        <div>
            <h1 className='destinationTitle'>TOP NOTCH DESTINATION</h1>
            <Container>
                <Row>

                    {
                        places.map(place =>


                            <Col sm={1} md={3}>
                                <Card >
                                    <Card.Img variant="top" src={place.img} />
                                    <Card.Body>
                                        <Card.Title>{place.title}</Card.Title>
                                        <Card.Text>
                                            {place.description}
                                        </Card.Text>
                                        <Link to={`/placebooking/${place._id}`}><button>Book now</button></Link>



                                    </Card.Body>
                                </Card>

                            </Col>
                        )
                    }

                </Row>
            </Container>



        </div >
    );
};

export default Destinations;
