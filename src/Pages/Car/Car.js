import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

const Car = () => {
    const detailsCar = useLoaderData()
    const [usedCar,setUsedCar] = useState(null) 

    const {_id,model,location,resale_price,original_price,years_of_use,image_url,details
    } = detailsCar
    console.log(detailsCar)
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image_url} alt='' className="max-w-sm rounded-lg shadow-2xl" />
          <div>
          <div className="card-body">
          <Link className='text-end'>Post Date:{detailsCar.seller.posted_date}</Link>
          <h2 className="card-title">
             Model: {model}
          </h2>
            <div className="p-3 mt-2 font-bold badge badge-outline">Original Price:${original_price}</div>
            <div className="p-3 mt-2 font-bold badge badge-outline">Resale Price:${resale_price}</div> 
            <div className="p-3 mt-2 font-bold badge badge-outline">Used Year:{years_of_use}</div>
            <div className="p-3 mt-2 font-bold badge badge-outline">Location:{location}</div>
            <div className="p-3 mt-2 font-bold badge badge-outline">Seller:{detailsCar.seller.name}</div> 
             <p className='font-bold'> {details}</p>
          <div className="card-actions justify-start w-75 mt-5">
              <button onClick={()=>window.history.back()} className="btn btn-dark">Go Back</button>
              <label  htmlFor="booking-modal" className="btn btn-dark">Book Now</label> 
          </div>
      
        </div>
        </div>
      </div>
      <BookingModal
       detailsCar ={detailsCar}
      ></BookingModal>
      </div>
    );
};

export default Car;