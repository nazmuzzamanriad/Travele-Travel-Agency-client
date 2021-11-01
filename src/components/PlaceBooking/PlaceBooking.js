import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './PlaceBooking.css'
import useAuth from '../hooks/useAuth';
import axios from 'axios';

const PlaceBooking = () => {
    const [place, setPlace] = useState({})
    const { id } = useParams();
    const { user, email } = useAuth();

    useEffect(() => {
        const url = `https://dreadful-spirit-11683.herokuapp.com/services/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPlace(data))

    }, [])

    console.log(place)






    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post('https://dreadful-spirit-11683.herokuapp.com/selectedItem', { place, data })
            .then(res => {
                console.log(res)

            })
    };

    return (
        <div>
            <span className='userInfo'>User Name: {user.displayName} Email: {user.email}</span>


            <div className='bookingInfo'>


                <div className='card'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={place.img} />
                        <Card.Body>
                            <Card.Title>{place.title}</Card.Title>
                            <Card.Text>
                                {place.description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='addForm'>
                    <h1>Booking Form</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='First Name ' {...register("firstName",)} /> <br />
                        <input placeholder='Second Name '  {...register("lastName",)} /> <br />
                        <input placeholder='Address ' {...register("address",)} /> <br />
                        <input placeholder=' Mobile NO' {...register("mobileno",)} /> <br />

                        <input value='place your booking' type="submit" />
                    </form>
                </div>
            </div>




        </div>
    );
};

export default PlaceBooking;