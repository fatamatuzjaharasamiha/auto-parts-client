import React from 'react';

const Review = ({reviewUser}) => {
    const {rating,review}=reviewUser
    return (
        <div>
            <div class="card w-96 bg-primary text-primary-content">
  <div class="card-body">
    <h2 class="card-title">Review : {review} </h2>
    <p>Rating : {rating}</p>
    
  </div>
</div>
        </div>
    );
};

export default Review;