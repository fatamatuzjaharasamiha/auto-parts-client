import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading'
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    const { id } = useParams();
    // console.log(id)
    // const [tool, settool] = useState([])

    const [user] = useAuthState(auth)
    const quantityRef = useRef('')
    const addressRef = useRef('')
    const phoneRef = useRef('')
    const [price, setPrice] = useState(0)
    const [quantityError, setQuantityError] = useState('')

    // useEffect(() => {
    //     const url = `https://rocky-wildwood-73268.herokuapp.com/product/${id}`
    //     console.log(url);
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => settool(data))
    // }, [id])

    const { data: tool, isLoading, refetch } = useQuery('tool', () => fetch(`https://rocky-wildwood-73268.herokuapp.com/product/${id}`, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
            "content-type": "application/json"
        },
    }).then(res => res.json()))

    const placeOrder = (e) => {
        e.preventDefault()
        const inputQuantity = parseInt(quantityRef.current.value)
        const name = user.displayName
        const email = user.email
        const address = addressRef.current.value
        const phone = phoneRef.current.value
        const toolName = tool.name
        const toolId = tool._id

        setPrice(inputQuantity * tool.price)
        const order = {
            name,
            email,
            address,
            phone,
            quantity: inputQuantity,
            toolName,
            toolId,
            price: (tool.price * inputQuantity)
        }
        console.log(order);
        if (inputQuantity < tool.minimumOrder) {
            setQuantityError('Minimum order require ')
        }
        else if (inputQuantity > tool.quantity) {
            setQuantityError('Maximum order exceeded')
        }
        else {
            setQuantityError('')
            fetch('https://rocky-wildwood-73268.herokuapp.com/order', {
                method: "PUT",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
                    "content-type": "application/json"
                },
                body: JSON.stringify(order)
            })
                .then(res => {
                    res.json()
                })
                .then(data => {
                    refetch()
                    toast.success('Product purchased')
                    console.log(data);
                })

        }
        e.target.reset()
    }
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 mt-12'>
            <div class="card m-10 w-6/12 bg-purple-200 shadow-2xl ">
                <figure class="px-10 pt-10">
                    <img src={tool.img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Name : {tool.name}</h2>
                    <h2 class="card-title">Price : {tool.price}</h2>
                    <p className='font-bold'>Min Order Quantity : {tool.minimumOrder}</p>
                    <p className='font-bold'>Available Quantity : {tool.quantity}</p>
                    <p>{tool.description}</p>
                    <div class="card-actions">
                    </div>
                </div>
            </div>
            <form onSubmit={placeOrder} className="form-control w-full max-w-xs mr-auto">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" readOnly value={user.displayName} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Email</span>

                </label>
                <input type="text" readOnly value={user.email} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Address</span>
                </label>
                <input ref={addressRef} type="text" placeholder="Your Address" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Phone Number</span>
                </label>
                <input ref={phoneRef} type="text" placeholder="Your Number" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Quantity</span>
                </label>
                <input ref={quantityRef} type="number" placeholder={`Minimun order ${tool.minimumOrder}`} className="input input-bordered w-full max-w-xs " />
                {
                    quantityError ? <p>{quantityError}</p> : <p>{`Subtotal: ${price}`}</p>
                }
                {/* <p className='text-red-500'>{quantityError ? `${quantityError}` : <p></p>}</p> */}
                <input type="submit" placeholder='' value='Order place' className="input input-bordered w-full max-w-xs mt-5 btn btn-primary" />
            </form>
        </div>
    );
};

export default Purchase;