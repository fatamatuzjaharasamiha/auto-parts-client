import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AddReview = () => {
    const [user, loading] = useAuthState(auth)
    const ratingRef = useRef('')
    if (loading) {
        return <Loading />
    }
    const handleAddReview = (e) => {
        e.preventDefault()
        const review = e.target.review.value
        const rating = ratingRef.current.value
        const userReview = {
            name: user.displayName,
            email: user.email,
            rating,
            review
        }
        console.log(userReview);
        fetch('https://rocky-wildwood-73268.herokuapp.com/userreview', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Thanks for review!!")
                console.log(data);
            })
    }

    return (
       <div className=''>
           <div className='m-10'>
            <form onSubmit={handleAddReview} >
                <textarea name='review' className="textarea textarea-bordered" placeholder="Please add review"></textarea>
                <br />
                <input ref={ratingRef} type="number" placeholder=" Rating" class="input max-w-xs m-6" />
                <br />
                <input type="submit" value='Add Review' className="input input-bordered w-full max-w-xs btn btn-secondary" />
            </form>
        </div>
       </div>
    );
};

export default AddReview;