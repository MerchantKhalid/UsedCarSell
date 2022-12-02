import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../ContextApi/AuthProvider';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate =useNavigate()
    const {user} = useContext(AuthContext) 
    

    const categories = [
        {
            id:1,
            name:'Tesla'
        },
        {
            id:2,
            name:'Volks Wagon'
        },
        {
            id:3,
            name:'BMW'
        },
        {
            id:4,
            name:'Ferrari'
        },
        {
            id:5,
            name:'Jaguar'
        },
        ]
    const conditions =[
        {
            id:1,
            name:'Excellent'
        },
        {
            id:2,
            name:'Fair'
        },
        {
            id:3,
            name:'Good'
        },
        
    ]
    const locations = [
        
        {
            id:1,
            name:'Dhaka'
        },
        {
            id:2,
            name:'Sylhet'
        },
        {
            id:3,
            name:'Kulna'
        },
        {
            id:4,
            name:'Chittagong'
        },
    ]


    const handleAdd = data=>{
        const addedproduct = {
           name:data.name,
           model:data.model,
           desc:data.desc,
           email:data.email,
           phone:data.phone,
           purchase:data.purchase,
           category: data.category,
           condition: data.condition,
           location:data.location,
           imageurl: data.imageurl
        }
        const url = `http://localhost:5000/addproduct`
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(addedproduct)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            if(result.acknowledged){
                toast.success(`Successfully ${addedproduct.model} Product Added` )
               navigate('/dashboard/myproduct')
            }else{
                toast.error(result.message)
            }
        })
    }
    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl text-orange-600">Add Products</h2>
            <form onSubmit={handleSubmit(handleAdd)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input  type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Model Name</span></label>
                    <input type="text" {...register("model", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Purchase Year</span></label>
                    <input type="text" {...register("purchase", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.purchase.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Price</span></label>
                    <input type="text" {...register("price", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.price.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <input type="text" {...register("desc", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.desc.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Phone</span></label>
                    <input type="text" {...register("phone", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.phone.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Image Url</span></label>
                    <input type="text" {...register("imageurl", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.imageurl.message}</p>}
                </div>






                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Category</span></label>
                    <select 
                    {...register('category')}
                    className="select input-bordered w-full max-w-xs">
                        {
                            categories.map(cate=><option 
                             key={cate.id}
                             value={cate.name}
                        >{cate.name}</option>)
                        } 
                    </select>
                </div>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Locations</span></label>
                    <select 
                    {...register('location')}
                    className="select input-bordered w-full max-w-xs">
                        {
                            locations.map(lo=> <option
                            key={lo.id}
                             value={lo.name}
                        >{lo.name}</option>)
                        } 
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Condition</span></label>
                    <select 
                    {...register('condition')}
                    className="select input-bordered w-full max-w-xs">
                        {
                            conditions.map(lo=> <option
                            key={lo.id}
                             value={lo.name}
                        >{lo.name}</option>)
                        } 
                    </select>
                </div>
                
                <input className='btn w-full mt-4' value="Add Product" type="submit" />
            </form>
        </div>
    );
};






//     return (
//         <div>
//             <h2 className='text-4xl text-orange-400 mb-5'>Add Your Product </h2>

            
//             <form onSubmit={handleBooking} className='h-48 text-center grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1'>
//                <input type="text" name='Uname' placeholder='name' className="mb-3 input input-bordered w-full max-w-xs" />
//                <select className="select select-bordered w-full max-w-xs mb-3">
//                     <option name='category' selected>Category</option>
//                     {
//                         categories.map(cate=><option 
//                             key={cate.id}
//                             value={cate.name}
//                         >{cate.name}</option>)
//                     }
                    
//                 </select>
                




//                <input type="email" name='email' placeholder='email' className="mb-3 input input-bordered w-full max-w-xs" />
//                <input type="text" name='model' placeholder='model' className="mb-3 input input-bordered w-full max-w-xs" />
//                <select className="select select-bordered w-full max-w-xs mb-3">
//                     <option name='condition' selected>Condition</option>
//                     {
//                         conditions.map(co=><option
//                             key={co.id}
//                             value={co.name}
//                         >{co.name}</option>)
//                     }
                   
                    
//                 </select>

            
//                <input type="text" name='purchase'     placeholder='Purchase Year' className="mb-3 input input-bordered w-full max-w-xs" />
//                <input type="text" name='price'     placeholder='price' className="mb-3 input input-bordered w-full max-w-xs" />
//                <select  className="select select-bordered w-full max-w-xs mb-3">
//                     <option name='location' selected>Location</option>
//                     {
//                         locations.map(lo=> <option
//                             key={lo.id}
//                             value={lo.name}
//                         >{lo.name}</option>)
//                     }
                   
                   
//                 </select>
                



//                 <textarea className="textarea textarea-bordered w-full max-w-xs mb-3" placeholder="Description"></textarea>
//                <input type="text" name='phone'      placeholder="Phone" className="mb-3 input input-bordered w-full max-w-xs" required />
//                <input type='submit' value='Submit'  className='w-full max-w-xs btn btn-dark'></input>
//             </form>
            
        
//         </div>
//     );
// };

export default AddProduct;