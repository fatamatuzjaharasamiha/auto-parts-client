import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AddReview = () => {
    const [user,loading] = useAuthState(auth)
    const ratingRef = useRef('')
if(loading){
    return <Loading/>
}
    const handleAddReview = (e) => {
        e.preventDefault()
        const review = e.target.review.value
        const rating=ratingRef.current.value
        const userReview = {
            name: user.displayName,
            email: user.email,
            rating,
            review
        }
        console.log(userReview);
        fetch('http://localhost:5000/userreview', {
            method: "POST",
            headers: {
                "content-type":"application/json",
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
        <div className='mt-12 ml-8'>
            <form onSubmit={handleAddReview} >
                <textarea name='review' className="textarea textarea-bordered" placeholder="Please insert your review"></textarea>
                <input ref={ratingRef} type="number" placeholder="Enter Rating" class="input w-full max-w-xs" />

                <input type="submit" value='Add Review' className="input input-bordered w-full max-w-xs btn btn-primary" />
            </form>
        </div>
    );
};

export default AddReview;