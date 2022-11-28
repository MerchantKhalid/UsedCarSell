
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../ContextApi/AuthProvider';

const MyAppointment = () => {
    const {user} = useContext(AuthContext)
    const url=`https://warehouse-server-two.vercel.app/bookings?email=${user?.email}`
    const {data :bookings=[]}= useQuery({
        queryKey:['bookings',user?.email],
        queryFn: async()=>{
            const res = await fetch(url,{
                headers:{
                    authorization :`bearer ${localStorage.getItem('accessToken')}`
                },
            })
            const data= await res.json()
            return data
        }
    })
    return (
        <div>
            <h3 className='font-bold text-2xl mb-3'>My Appointments</h3> 
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>E-mail</th>
        <th>Price</th>
        <th>Location</th>
        <th>Model</th>
        
      </tr>
    </thead>
    <tbody>
      {
        bookings.map((booking,i)=><tr>
        <th>{i+1}</th>
        <td>{booking.name}</td>
        <td>{booking.email}</td>
        <td>{booking.price}</td>
        <td>{booking.location}</td>
        <td>{booking.model}</td>
      </tr>)
      }
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default MyAppointment;