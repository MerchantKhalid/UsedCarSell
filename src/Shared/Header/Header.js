import React, { useContext } from 'react';
import logo from '../../assets/icons/check.svg'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../ContextApi/AuthProvider';
import { FaUser } from 'react-icons/fa';
import Categories from '../../Pages/Categories/Categories';
const Header = () => {
  const {user,logout} = useContext(AuthContext)  
  console.log(user)

    const menuItems = <>
        <li><Link to='/' className='font-bold'>Home</Link> </li>
        <li><Link to='/categories' className='font-bold'>Categories</Link> </li>
        <li><Link to='/advertiseitems' className='font-bold'>Advertised Items</Link> </li>
        <li><Link to='/blog' className='font-bold'>Blog</Link> </li>
        
        {
          !user?<li><Link to='/login' className='font-bold'>Login</Link> </li>:
         <>
         <li><Link onClick={logout} className='font-bold'>Log Out</Link> </li>
         
         </>
        }
    </>


    return (
<div className="navbar h-20 mb-12 pt-12 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      {/* ul */}
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
      {/* ul end */}
      
      
    </div>
        <Link className='flex' to='/'>
          <img src={logo} alt='/'></img> <h3 className='text-3xl font-bold text-grey ml-1 mt-1'>TheBest</h3>
        </Link>
        
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  
    
  </div>
  
  <div className="navbar-end">
     <div>
      {
        user && <>
        <div className="avatar">
          <div className="w-12">
             <img src={user?.photoURL} alt=""></img>
        </div>
        <p className='mt-3 font-bold ml-1'>{user?.displayName}</p>
      </div>
        </>
      }
      
     </div> 
    <div><Link to='/' className="btn ml-5">Appointment</Link></div>
  </div>
  
</div>
    );
};

export default Header;