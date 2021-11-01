import React from 'react';
import './AddNewDestination.css'
import { useForm } from "react-hook-form";
import axios from 'axios';



const AddNewDestination = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)

        axios.post('https://dreadful-spirit-11683.herokuapp.com/services', data)
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('data inserted bro')


                }
            })


    };

    // https://i.ibb.co/gzjL8v0/img19.jpg
    // https://i.ibb.co/Xt6Vq22/img18.jpg
    // https://i.ibb.co/K27bGJ2/img14.jpg
    // https://i.ibb.co/GJZZ9N5/img13.jpg
    // https://i.ibb.co/fNFzJc7/ajha.jpg
    // https://i.ibb.co/8Dc5xVc/ccb.jpg
    return (
        <div>
            <h1 className='formTitle'>Please add a new destination</h1>
            <div className='addForm'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder='Title' {...register("title")} /> <br />
                    <textarea placeholder='description' {...register("description")} /> <br />
                    <input placeholder='image Link' {...register("img")} /> <br />

                    <input type="submit" value='Add new destination' />
                </form>
            </div>

        </div>
    );
};

export default AddNewDestination;