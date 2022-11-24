import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllCategories from '../AllCategories/AllCategories';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Categories = () => {
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/car-category')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <><div className="divider"></div>
        <div className='grid grid-cols-5 gap-5 font-bold mb-5'>
         
            {categories.map(category=><p key={category.id}>
                <Link to={`/allcategories/${category.id}`}>{category.name}</Link>
            </p>)}
        </div>
        <Banner />
        <Services />
        </>
    );
};

export default Categories;