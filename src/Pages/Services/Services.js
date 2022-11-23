import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch('services.json')
          .then(res=>res.json())
          .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl text-orange-600 font-bold'>Services</p>
                <h2 className='text-5xl font-bold'>Our Service Area</h2>
                <p className='text-gray-600'>Dernier Track every stock move from purchase to warehouse bin to sales order. Trace lots and serial <br /> numbers everywhere in your supply chain.</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
            {
                services.map(service=><ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }
            </div>
        </div>
    );
};

export default Services;