import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, description, price, minimumOrder, quantity } = product
    const navigate = useNavigate();
    const navigateToPurchase = (id) => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div>
            <div class="card w-96 bg-purple-200 shadow-2xl m-5">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Name : {name}</h2>
                    <h2 class="card-title">Price : {price}</h2>
                    <p className='font-bold'>Min Order Quantity : {minimumOrder}</p>
                    <p className='font-bold'>Available Quantity : {quantity}</p>
                    <p>{description.slice(1, 100)}...</p>
                    <div class="card-actions">
                        <button onClick={() => navigateToPurchase(_id)} className='btn btn-primary mt-3 font-bold'>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;