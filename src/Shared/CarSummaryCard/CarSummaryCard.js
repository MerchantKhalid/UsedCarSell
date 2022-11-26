import React from 'react';
import { Link } from 'react-router-dom';
import BookingModal from '../../Pages/BookingModal/BookingModal';

const CarSummaryCard = ({car}) => {
    console.log(car)
    const {_id,model,location,resale_price,original_price,years_of_use,image_url,details
    } = car
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <p className='text-end font-bold'>Post Date:{car.seller.posted_date}</p>
    <h2 className="card-title">
       Model: {model}
    </h2>
      <div className="font-bold badge badge-outline">Original Price:${original_price}</div>
      <div className="font-bold badge badge-outline">Resale Price:${resale_price}</div> 
      <div className="font-bold badge badge-outline">Used Year:{years_of_use}</div>
      <div className="font-bold badge badge-outline">Location:{location}</div>
      <div className="font-bold badge badge-outline">Seller:{car.seller.name}</div> 
        
    <div className="card-actions justify-start mt-3">
        <button className="btn btn-dark"><Link to={`/alldata/${_id}`}>Explore More</Link></button>
    </div>
      <BookingModal></BookingModal>
  </div>
</div>
    );
};

export default CarSummaryCard;