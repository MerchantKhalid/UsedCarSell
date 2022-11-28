import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Shared/Header/Header';

const DashboardLayout = () => {
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
     
      <li><a>My Appointment </a></li>
      <li><a>My Orders</a></li>
    </ul>
  
  </div>
</div>
           
        </div>
    );
};

export default DashboardLayout;