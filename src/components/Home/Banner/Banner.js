import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import paris from '../../../images/paris.jpg'
import london from '../../../images/london.jpg'
import america from '../../../images/america.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={paris}
                        alt="First slide"

                    />
                    <Carousel.Caption>
                        <h1 className='title'>Paris-The city of Romance,Friendship,Love</h1>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={london}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className='title'>London-The City of British Raj</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={america}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className='title'>America-The city of luxury</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </div >
    );
};

export default Banner;