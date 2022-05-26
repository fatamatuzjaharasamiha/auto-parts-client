import React from 'react';

const Blogs = () => {
    return (
        <div class="card glass">
            <figure><img className='w-4/12	' src="https://i.ibb.co/wwZ9ZSv/q-question-answer-word-written-wooden-blocks-text-written-black-letters-reflected-mirror-surface-212.jpg" alt="car!" /></figure>

            <div className='grid items-center bg-orange-100'>
                <div class="card-body">
                    <p className='text-2xl font-bold '>Question 1 : How will you improve the performance of a React Application? </p>
                    <p className=' text-xl'><span className='text-xl font-bold'>Answer :</span>To improve the performance of a react application , need to make sure that components receive only necessary props.It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components,have to keep component state local where necessary,Code-splitting in React using dynamic import().</p>
                </div>
                <div class="card-body">
                    <p className='text-2xl font-bold '>Question 2 :  What are the different ways to manage a state in a React application? </p>
                    <p className='text-xl'><span className='text-xl font-bold'>Answer :</span>There are four main types of state to manage a state in a react Application : Local state,Global state,Server state,URL state.Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state.
                    </p>
                </div>
                <div class="card-body">
                    <p className='text-2xl font-bold '>Question 3 :  How does prototypical inheritance work? </p>
                    <p className='text-xl'><span className='text-xl font-bold'>Answer :</span> Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
                <div class="card-body">
                    <p className='text-2xl font-bold '>Question 4 :  </p>
                    <p className='text-xl'><span className='text-xl font-bold'>Answer :</span></p>
                </div>
                <div class="card-body">
                    <p className='text-2xl font-bold '>Question 5 : What is a unit test? Why should write unit tests? </p>
                    <p className='text-xl'><span className='text-xl font-bold'>Answer :</span>A unit test is a way to test a unit, the smallest code in a system that can logically be isolated. This is a function, a subroutine, a procedure, or a property in most programming languages.It  ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;