
import AddProduct from "../assets/DashBoard/AddProduct/AddProduct";
import DashBoard from "../assets/DashBoard/DashBoard";
import DashboardLayout from "../assets/DashBoard/DashboardLayout";
import MyAppointment from "../assets/DashBoard/MyAppointment/MyAppointment";
import MyProduct from "../assets/DashBoard/MyProduct/MyProduct";
import Main from "../Layout/Main/Main";
import Advertise from "../Pages/Advertise/Advertise";
import AllCategories from "../Pages/AllCategories/AllCategories";
import Blog from "../Pages/Blog/Blog";
import BookingModal from "../Pages/BookingModal/BookingModal";
import Car from "../Pages/Car/Car";
import Categories from "../Pages/Categories/Categories";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SellerAccount from "../Pages/SellerAccount/SellerAccount";

import Signup from "../Pages/Signup/Signup";
import ErrorElement from "./ErrorElement";
import PrivateRoute from "./PrivateRoute";
const {createBrowserRouter } = require( "react-router-dom");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        errorElement:<ErrorElement />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/signup',
                element:<Signup />
            },
            {
                path:'/selleraccount',
                element:<SellerAccount />
            },
            {
                path:'/categories',
                element:<PrivateRoute><Categories /></PrivateRoute>,

            },
            {
                path:'/allcategories/:id',
                element:<PrivateRoute><AllCategories /></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/allcategories/${params.id}`)
            },
            {
                path:'/alldata/:id',
                element:<PrivateRoute><Car /></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/alldata/${params.id}`)
            },
            {
                path:'/alldata/:id',
                element:<PrivateRoute><BookingModal /></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/alldata/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog />
            },
            {
                path:'/advertise',
                element:<Advertise />
            },
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout /></PrivateRoute>,
        children:[
            {
              path:'/dashboard',
              element:<MyAppointment />,
            },
            {
              path:'/dashboard/addproduct',
              element:<AddProduct />,
            },
            {
              path:'/dashboard/myproduct',
              element:<MyProduct />,
              loader:()=>fetch(`http://localhost:5000/addedproduct`)
            },
            
        ]
    },

])
export default router;