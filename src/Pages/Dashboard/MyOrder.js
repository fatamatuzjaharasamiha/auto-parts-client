import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth)
    const [tools, setTools] = useState([])
    const navigate = useNavigate()


    useEffect(() => {

        fetch(`https://rocky-wildwood-73268.herokuapp.com/userorder?email=${user?.email}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    localStorage.removeItem("accessToken")
                    navigate('/')
                }
                return res.json()
            })
            .then(data => {
                setTools(data)
            })

    }, [user, navigate, loading])



    return (
        <div>
            <h2>My Orders {tools.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full text-purple-600">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Order</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>STATUS</th>
                            <th>PAYMENT STATUS</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            tools.map((tool, index) => <OrderRow key={tool._id} tool={tool} index={index}></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;