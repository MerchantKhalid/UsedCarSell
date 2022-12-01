import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({car}) => {
    const {_id,model,location,resale_price,original_price,years_of_use,image_url,details
    } = car
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image_url} alt='' className="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <div className="card-body">
    <p className='text-end font-bold'>Post Date:{car.seller.posted_date}</p>
    <h2 className="card-title">
       Model Name: {model}
    </h2>
      <div className="font-bold badge badge-outline">Original Price:${original_price}</div>
      <div className="font-bold badge badge-outline">Resale Price:${resale_price}</div> 
      <div className="font-bold badge badge-outline">Used Year:{years_of_use}</div>
      <div className="font-bold badge badge-outline">Location:{location}</div>
      <div className="font-bold badge badge-outline">Seller:{car.seller.name}</div> 
       <p> {details}</p>
    <div className="card-actions justify-end">
        <button className="btn btn-primary">Book Now</button>
    </div>

  </div>
  </div>
</div>
</div>
    );
};

export default CarCard;