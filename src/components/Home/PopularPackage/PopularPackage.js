import React from 'react';
import './popular.css'
import pic1 from '../../../images/img5.jpg'
import pic2 from '../../../images/img6.jpg'
import pic3 from '../../../images/img7.jpg'
import { Card, Col, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';

const PopularPackage = () => {
    return (
        <div>
            <h1 className='packageTitle'>popular package</h1>
            <div className='packageSection'>
                <div className='singleCard' >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={pic1} />
                        <Card.Body>
                            <Card.Title>Sunset view of beautiful lakeside resident (Malaysia)</Card.Title>
                            <Card.Text>
                                City tour,natural beauty,hiking with best hikiers
                                15% discount on early booking
                            </Card.Text>
                            <Button variant="primary">Book Now</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='singleCard' >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={pic2} />
                        <Card.Body>
                            <Card.Title>Experience the natural beauty of island (Canada)
                            </Card.Title>
                            <Card.Text>
                                Super new package specially for lovers.
                                Couples are get 50% discount before 14feb.

                            </Card.Text>
                            <Button variant="primary">Book Now</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='singleCard' >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={pic3} />
                        <Card.Body>
                            <Card.Title>Vacation to the water city of Portugal</Card.Title>
                            <Card.Text>
                                1 month stay in airbnb within the nature.
                                currently 20% off

                            </Card.Text>
                            <Button variant="primary">Book Now</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>
    );
};

export default PopularPackage;