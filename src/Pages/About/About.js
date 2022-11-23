import React from 'react';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero my-20">
  <div className="hero-content flex-col lg:flex-row">
   <div className='relative w-1/2'>
      <img src={person} alt='/' className="w-4/5 h-full rounded-lg shadow-2xl" />
      <img src={parts} alt='/' className="absolute w-3/5 right-5 top-1/2  rounded-lg shadow-2xl" />
   </div>
    <div className='w-1/2'>
    <p className='text-2xl font-bold text-orange-600'>About Us</p>
      <h1 className="my-5 text-3xl font-bold">We are Qualified <br/>
                & of Experiece <br />
                in this Field</h1>
      <p className="py-6">
      doo.com a été visité par plus de 100 000 utilisateurs le mois dernier

Track every stock move from purchase to warehouse bin to sales order. Trace lots and serial numbers everywhere in your supply chain.
      </p>
      <button className="btn bg-orange-600 border-none">Get More</button>
    </div>
  </div>
</div>
    );
};

export default About;