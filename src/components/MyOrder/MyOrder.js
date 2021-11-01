import React, { useEffect, useState } from 'react';
import './Myorder.css'

const MyOrder = () => {
    const [orders, SetOrders] = useState([])

    useEffect(() => {
        fetch('https://dreadful-spirit-11683.herokuapp.com/selectedItem')
            .then(res => res.json())
            .then(data => SetOrders(data))


    }, [])

    console.log(orders)

    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('are you want to delete sure?')
        if (proceed) {
            const url = `https://dreadful-spirit-11683.herokuapp.com/selectedItem/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingOrders = orders.filter(order => order._id !== id)
                        SetOrders(remainingOrders)

                    }
                })

        }
    }





    return (
        <div>

            {
                orders.map(order =>
                    <div className='myOrder'>

                        <div>
                            <img src={order.place.img} alt="" srcset="" />
                            <h1>{order.place.title}</h1>


                        </div>
                        <div className='text'>
                            <h6>{order.data.firstName}</h6>
                            <h6>{order.data.lasttName}</h6>
                            <h6>{order.data.address}</h6>
                            <h6>{order.data.mobileno}</h6>
                            <button onClick={() => handleDeleteOrder(order._id)}>Delete</button>


                        </div>






                    </div>

                )
            }




        </div >
    );
};

export default MyOrder;