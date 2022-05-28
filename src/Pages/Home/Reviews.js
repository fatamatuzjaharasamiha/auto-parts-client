import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://rocky-wildwood-73268.herokuapp.com/reviews').then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    function reverseArr(input) {
        let reversed = []
        for (var i = input.length - 1; i >= 0; i--) {
            reversed.push(input[i]);
        }
        return reversed;
    }
    const reverseResult = reverseArr(reviews)
    const result = reverseResult.slice(0, 6)
    return (
        <div>
            <h1 className='m-6 text-5xl'>Reviews</h1>
           <div>
           {
                result.slice(-result.length).map(review => <Review key={review._id} reviewUser={review}></Review>)
            }
           </div>
        </div>
    );
};

export default Reviews;