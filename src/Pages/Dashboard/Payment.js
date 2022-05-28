import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './Checkout';

const stripePromise = loadStripe('pk_test_51L4DULAoloGFBTsrRlFdt9aFSoNWxj4IZcA0tFzk8Cex9HpJwl9qMauz0kY55bCPMB12CpJRxPqwG5ge1ms58ouc00sEpFBBK4');

const Payment = () => {
    const { id } = useParams()
    const url = `https://rocky-wildwood-73268.herokuapp.com/order/${id}`
    const { data: tool, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
            "content-type": "application/json"
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Loading />
    }



    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='text-success font-bold'> Hello, {tool.name}</p>
                    <h2 className="card-title">Pay for: {tool.toolName}</h2>
                    <p>Your Quantity is <span className='text-orange-700'>{tool.quantity}</span></p>
                    <p>Please pay: ${tool.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm tool={tool} />
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;