import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    console.log(id)
    const [tools, setTools] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className=''>
            <h1 className='text-3xl mt-10 font-bold'>Purchase Your product</h1>
            <div class="card m-10 w-6/12 bg-purple-200 shadow-2xl ">
                <figure class="px-10 pt-10">
                    <img src={tools.picture} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Name : {tools.name}</h2>
                    <h2 class="card-title">Price : {tools.price}</h2>
                    <p className='font-bold'>Min Order Quantity : {tools.minimumOrderQuantity}</p>
                    <p className='font-bold'>Available Quantity : {tools.availableQuantity}</p>
                    <p>{tools.description}</p>
                    <div class="card-actions">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;