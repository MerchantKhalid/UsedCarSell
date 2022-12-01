import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import verified from '../../assets/verified.png'

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
             Model Name: {model}
          </h2>
            <div className="p-3 mt-2 font-bold badge badge-outline">Original Price:${original_price}</div>
            <div className="p-3 mt-2 font-bold badge badge-outline">Resale Price:${resale_price}</div> 
            <div className="p-3 mt-2 font-bold badge badge-outline">Used Year:{years_of_use}</div>
            <div className="p-3 mt-2 font-bold badge badge-outline">Location:{location}</div>
            <div className='flex justify-between'>
        <div className="font-bold badge badge-outline">Seller:{detailsCar.seller.name}</div>
         <div className="font-bold">{detailsCar.others_info?.is_verified ? <img style={{width:'28px',height:'28px'}} src={verified} alt=''></img> : 'Not Verified'}</div>
      </div>
             <p className='font-bold'> {details}</p>
          <div className="card-actions justify-start w-75 mt-5">
              <button onClick={()=>window.history.back()} className="btn btn-dark">Go Back</button>
              <label  htmlFor="booking-modal" className="btn btn-dark">Confirm Book</label> 
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