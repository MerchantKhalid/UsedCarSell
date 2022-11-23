import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <><div className="divider"></div>
        <div className='grid grid-cols-5 gap-5 font-bold mb-5'>
         
            {categories.map(category=><p key={category.id}>
                <Link to={`/category/${category.id}`}>{category.name}</Link>
            </p>)}
        </div>
        </>
    );
};

export default Categories;