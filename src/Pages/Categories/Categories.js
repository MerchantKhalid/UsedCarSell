import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllCategories from '../AllCategories/AllCategories';
import Banner from '../Banner/Banner';
import BookingModal from '../BookingModal/BookingModal';
import Services from '../Services/Services';

const Categories = () => {
    const [allCategories,setCategories] = useState([])
    useEffect(()=>{
        fetch('https://warehouse-server-two.vercel.app/car-category')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    console.log('our',allCategories)
    return (
        <>
        <section>
        <div className="divider"></div>
        <div className='grid grid-cols-5 gap-5 font-bold mb-5'>
         
            {allCategories.map(category=><p key={category._id}>
                <Link to={`/allcategories/${category._id}`}>{category.name}</Link>
            </p>)}
        </div>
        
        <Banner />
        <Services />
        </section>
        
        </>
    );
};

export default Categories;