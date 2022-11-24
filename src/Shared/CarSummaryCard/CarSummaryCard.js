import React from 'react';

const CarSummaryCard = ({car}) => {
    const {_id,model,location,resale_price,original_price,years_of_use,image_url} = car
    console.log(car)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <a className='text-end'>Post Date:{car.seller.posted_date}</a>
    <h2 className="card-title">
       Model: {model}
    </h2>
      <div className="font-bold badge badge-outline">Original Price:${original_price}</div>
      <div className="font-bold badge badge-outline">Resale Price:${resale_price}</div> 
      <div className="font-bold badge badge-outline">Used Year:{years_of_use}</div>
      <div className="font-bold badge badge-outline">Location:{location}</div>
      <div className="font-bold badge badge-outline">Seller:{car.seller.name}</div> 
      
      
        
    <div className="card-actions justify-end">
        <button className="btn btn-primary">Book Now</button>
    </div>

  </div>
</div>
    );
};

export default CarSummaryCard;