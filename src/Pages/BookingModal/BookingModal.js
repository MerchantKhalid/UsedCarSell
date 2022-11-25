import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../ContextApi/AuthProvider';

const BookingModal = () => {
    const {user} = useContext(AuthContext) 
    const detailsCar = useLoaderData() 
    const {_id,model,location,resale_price,original_price,years_of_use,image_url,details
    } = detailsCar
   
    return (
            <>
 <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className='text-lg font-bold text-center mb-2'>Car Model:{model}</h3> 
            <form className='text-center'>
               <input type="text" placeholder="Type here" className="mb-3 input input-bordered w-full max-w-xs" />
               <input type="text" placeholder="Type here" className="mb-3 input input-bordered w-full max-w-xs" />
               <input type="text" placeholder="Type here" className="mb-3 input input-bordered w-full max-w-xs" />
               <input type="text" placeholder="Type here" className="mb-3 input input-bordered w-full max-w-xs" />
               <input type="text" placeholder="Type here" className="mb-3 input input-bordered w-full max-w-xs" />
               <input type='submit' value='Submit' className='w-full max-w-xs btn btn-dark'></input>
            </form>
            <div className="modal-action">
            
            </div>
        </div>
        </div>
            </>
    );
};

export default BookingModal;