import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full min-h-0">
                    <img src="https://i.ibb.co/WB9FLtM/slider-2-870x550.jpg" class="w-full" />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src="https://i.ibb.co/mhLRgZh/slider1-9.jpg" class="w-full" />
                </div>
                
               
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
               
            </div>
        </div>
    );
};

export default Banner;