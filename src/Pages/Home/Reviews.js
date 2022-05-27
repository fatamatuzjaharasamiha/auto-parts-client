import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('http://localhost:5000/reviews').then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2>Reviews: {reviews.length}</h2>
        </div>
    );
};

export default Reviews;