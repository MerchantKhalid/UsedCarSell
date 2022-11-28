import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../ContextApi/AuthProvider';

const BookingModal = () => {

    const {user} = useContext(AuthContext) 
    const detailsCar = useLoaderData() 
    const {_id,model,location,resale_price,original_price,years_of_use,image_url,details
    } = detailsCar
    const navigate = useNavigate()

    const handleBooking = event=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const price = form.price.value
        const phone = form.phone.value
        const location = form.location.value

        const booking = {
            name,
            email,
            price,
            phone,
            location,
            model

        }
        fetch('https://warehouse-server-two.vercel.app/booking',{
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                toast.success(`Booking Confirmed for ${booking.model}` )
               navigate('/')
            }else{
                toast.error(data.message)
            }
        })


        
        console.log(booking)
        
    }
   
    return (
            <>
 <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className='text-lg font-bold text-center mb-2'>Car Model:{model}</h3> 
            <form onSubmit={handleBooking} className='text-center'>
               <input type="text" name='name' value={user.displayName} disabled className="mb-3 input input-bordered w-full max-w-xs" />
               <input type="text" name='email' value={user.email} disabled  className="mb-3 input input-bordered w-full max-w-xs" />
               <input type="text" name='location' value={location} disabled  className="mb-3 input input-bordered w-full max-w-xs" />
               <input type="text" name='price' value={resale_price} disabled  className="mb-3 input input-bordered w-full max-w-xs" />
               <input type="text" name='phone' placeholder="Phone" className="mb-3 input input-bordered w-full max-w-xs" />
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