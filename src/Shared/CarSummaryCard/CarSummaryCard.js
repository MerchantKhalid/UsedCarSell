import React from 'react';
import { FaArrowCircleRight, FaGgCircle, GoVerified } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BookingModal from '../../Pages/BookingModal/BookingModal';
import verified from '../../assets/verified.png'

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
       Model Name: {model}
    </h2>
      <div className="font-bold badge badge-outline">Original Price:${original_price}</div>
      <div className="font-bold badge badge-outline">Resale Price:${resale_price}</div> 
      <div className="font-bold badge badge-outline">Used Year:{years_of_use}</div>
      <div className="font-bold badge badge-outline">Location:{location}</div>
     <div className='flex justify-between'>
        <div className="font-bold badge badge-outline">Seller:{car.seller.name}</div>
         <div className="font-bold">{car.others_info?.is_verified ? <img style={{width:'28px',height:'28px'}} src={verified} alt=''></img> : 'Not Verified'}</div>
      </div>
      
        
    <div className="card-actions justify-start mt-3">
        <button className="btn btn-dark"><Link to={`/alldata/${_id}`}>Book Now</Link></button>
    </div>
      <BookingModal></BookingModal>
  </div>
</div>
    );
};

export default CarSummaryCard;