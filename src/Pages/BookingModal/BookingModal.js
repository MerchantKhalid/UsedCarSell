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
        const model = form.model.value
        const meetingLocation = form.meetingLocation.value

        const booking = {
            name,
            email,
            price,
            phone,
            location,
            model,
            meetingLocation

        }
        fetch('http://localhost:5000/booking',{
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
                toast.success(`Booking Confirmed for ${booking.model} in ${ meetingLocation}` )
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
               <input type="email" name='email' value={user.email} disabled  className="mb-3 input input-bordered w-full max-w-xs" />
               <input type="text" name='model' value={model} disabled  className="mb-3 input input-bordered w-full max-w-xs" />
               <input type="text" name='price' value={resale_price} disabled  className="mb-3 input input-bordered w-full max-w-xs" />
               <input type="text" name='meetingLocation' placeholder ="Meeting Location"  className="mb-3 input input-bordered w-full max-w-xs" required />
               <input type="text" name='phone' placeholder="Phone" className="mb-3 input input-bordered w-full max-w-xs" required />
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