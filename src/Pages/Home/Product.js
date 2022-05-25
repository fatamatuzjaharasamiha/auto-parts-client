import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, picture, description } = product
    const navigate = useNavigate();
    const navigateToPurchase = (id) => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={picture} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Name : {name}</h2>
                    <p>{description.slice(1, 100)}..</p>
                    <div class="card-actions">
                        <button onClick={() => navigateToPurchase(_id)} className='btn btn-secondary mt-3'>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;