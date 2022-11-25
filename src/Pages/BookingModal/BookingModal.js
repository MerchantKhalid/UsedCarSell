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
            <h3 className="font-bold text-lg">{user.displayName}</h3>
            <p className="py-4">{location}</p>
            <div className="modal-action">
            <label htmlFor="booking-modal" className="btn">X</label>
            </div>
        </div>
        </div>
            </>
    );
};

export default BookingModal;