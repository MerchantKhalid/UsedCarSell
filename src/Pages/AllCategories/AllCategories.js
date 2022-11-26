import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import CarSummaryCard from '../../Shared/CarSummaryCard/CarSummaryCard';
import Categories from '../Categories/Categories';

const AllCategories = () => {
    const brand = useLoaderData()
    console.log('rt',brand )
    
    const [allcategories,setCategories] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/car-category')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

    
    return (
    <div>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 bg-black p-5 text-white font-bold mb-5'>
            {allcategories.map(category=><p key={category.id}>
                <Link to={`/allcategories/${category.id}`}>{category.name}</Link>
            </p>)}
        </div>

            <h2 className='text-3xl font-bold text-center mt-5 mb-5'>Total Collection of :{brand.length}</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    brand.map(car=><CarSummaryCard
                      key={car._id}
                      car={car}
                    ></CarSummaryCard>)
                    }
            </div>
        </div>
    );
};

export default AllCategories;