import React from 'react';

const BannerItem = ({slide}) => {
    return (
        <div id={`slide${slide.id}`} className="carousel-item relative w-full">
    <div className='carousel-img'>
     <img src={slide.image} alt='/' className="w-full rounded-xl" />
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
    <h1 className='text-5xl font-bold text-white'>
         Your Comfortzoe <br />
         Always Ready to <br />
         Serve
    </h1>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
    <p className='text-white font-bold'>We Serve our customer in a proper way.Our First priority is Customer satisfaction </p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
    <button className="btn btn-outline text-white btn-lg btn-warning mr-5">Explore Us</button>
    <button className="btn btn-outline text-white btn-lg btn-warning">Details</button>
    </div>


    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href={`#slide${slide.prev}`}  className="btn btn-circle mr-5">❮</a> 
      <a href={`#slide${slide.next}`}  className="btn btn-circle">❯</a>
    </div>
  </div> 
    );
};

export default BannerItem;