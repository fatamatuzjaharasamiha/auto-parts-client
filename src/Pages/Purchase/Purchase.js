import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    console.log(id)
    const [tools, setTools] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div className=''>
            <h1>Purchase Your product</h1>
            <div class="card  bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;