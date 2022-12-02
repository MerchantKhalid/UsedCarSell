import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextApi/AuthProvider';
import Header from '../../Shared/Header/Header';

const DashboardLayout = () => {
  const {user} = useContext(AuthContext) 
    return (
        <div>
           <Header />
           <div className="drawer drawer-mobile">
  <input id="dashboard-drawyer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <Outlet />
    
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawyer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
     <li className='font-bold text-orange-600'>Seller Name: {user.displayName} </li>
      <li><Link to=''>My Appointment </Link></li>
      <li><Link to='/dashboard/addproduct'>Add Products</Link></li>
      <li><Link to='/dashboard/myproduct'>My Product</Link></li>
    </ul>
  
  </div>
</div>
           
        </div>
    );
};

export default DashboardLayout;