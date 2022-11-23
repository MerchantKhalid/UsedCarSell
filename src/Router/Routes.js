
import Main from "../Layout/Main/Main";
import AllCategories from "../Pages/AllCategories/AllCategories";
import Blog from "../Pages/Blog/Blog";
import Categories from "../Pages/Categories/Categories";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
const {createBrowserRouter } = require( "react-router-dom");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
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
                path:'/categories',
                element:<PrivateRoute><Categories /></PrivateRoute>
            },
            {
                path:'/allcategories/:id',
                element:<AllCategories />
            },
            {
                path:'/blog',
                element: <PrivateRoute><Blog /></PrivateRoute>
            }
        ]
    }
])
export default router;