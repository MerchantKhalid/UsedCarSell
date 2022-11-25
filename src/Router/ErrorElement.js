import React from 'react';
import { useNavigate } from 'react-router';

const ErrorElement = () => {
    const navigate = useNavigate()
    const goHome = () =>{
        navigate('/')
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://tse2.mm.bing.net/th?id=OIP.top-mfNIQ4kn7_mmm90DJgHaE0&pid=Api&P=0")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Oops!!</h1>
      <p className="mb-5">The page you are looking for cannot be found</p>
      <button onClick={goHome}  className="btn btn-primary">Go Home Page</button>
    </div>
  </div>
</div>
    );
};

export default ErrorElement;