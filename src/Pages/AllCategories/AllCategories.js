import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import CarSummaryCard from '../../Shared/CarSummaryCard/CarSummaryCard';

const AllCategories = () => {
    const brand = useLoaderData()

    
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-5 mb-5'>Total Collection : { brand.length }</h2>
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