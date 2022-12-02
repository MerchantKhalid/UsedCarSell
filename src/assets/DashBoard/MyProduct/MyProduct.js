import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';

import { AuthContext } from '../../../ContextApi/AuthProvider';
import MyCardProduct from './MyCardProduct';

const MyProduct = () => {
    const {user} = useContext(AuthContext)
    const url=`http://localhost:5000/addedproduct?email=${user?.email}`
    const {data :added=[]}= useQuery({
        queryKey:['added',user?.email],
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
            <h2 className='text-3xl text-orange-600'>My Product {added.length}</h2>
                <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                    {
                        added.map(ad=><MyCardProduct
                        key={ad.id}
                        ad={ad}
                        >

                        </MyCardProduct>)
                    }
                </div>

        </div>
    );
};

export default MyProduct;