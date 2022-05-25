import React from 'react';
import picture from '../../images/samiha-pic-with-bg.png'
const Portfolio = () => {
    return (
        <div>
            <div className='text-orange-500'>
                <h1 className='text-4xl font-semibold p-5'>My Portfolio</h1>
            </div>
            <div class="hero min-h-screen bg-orange-100 pt-mt-10 ">

                <div class="hero-content flex-col lg:flex-row">
                    <img src={picture} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <p className='text-2xl font-semibold p-1'>Name : Fatama Tuz Jahara Samiha</p>
                        <p className='text-2xl font-semibold p-2'>Email : samirajahara843@gmail.com</p>
                        <p className='text-2xl font-semibold p-2'>Educational Background : Bsc in CSE</p>
                        <p className='text-xl font-semibold p-2'>list of technologies or skills  I have as a web developer : </p>
                       
                      
                        <li className='font-bold'>HTML</li>
                        <li className='font-bold'>CSS</li>
                        <li className='font-bold'>Bootstrap</li>
                        <li className='font-bold'>Tailwind</li>
                        <li className='font-bold'>Javascript</li>
                        <li className='font-bold'>React</li>
                        <li className='font-bold'>Firebase</li>
                        <li className='font-bold'>Node</li>
                        <li className='font-bold'>Mongodb</li>
                           
                       

                        <p className='text-xl font-bold p-5' >Live website Link of my Project :</p>
                        <span className='font-bold p-4'> 1 .<a target="_blank" href="https://cocky-booth-8b81ef.netlify.app/"> Convention Center</a></span>
                        <span className='font-bold p-4'> 2 .<a target="_blank" href="https://unruffled-hoover-f883cf.netlify.app/"> Phone Hunter</a></span>
                        <span className='font-bold p-4'> 3 .<a target="_blank" href="https://dulcet-lokum-0853d9.netlify.app/"> Product Analysis Website</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;