import React from 'react';

const MyCardProduct = ({ad}) => {
    const {name,email,model,imageurl,price,desc,purchase,category,condition,location,phone}= ad
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={imageurl} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Model:{model}
      <div className="badge badge-secondary">{category}</div>
    </h2>
    <p>Description:{desc}</p>
    <p>Condition:{condition}</p>
    <p>Location:{location}</p>
    <p>Phone:{phone}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Purchase Year:{purchase}</div> 
      
    </div>
  </div>
</div>
    );
};

export default MyCardProduct;