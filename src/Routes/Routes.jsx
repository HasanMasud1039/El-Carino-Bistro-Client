import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layouts/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import Contact from "../Pages/Dashboard/Contact/Contact";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import AddReview from "../Pages/Dashboard/AddReview/AddReview";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import Booking from "../Pages/Dashboard/Booking/Booking";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
           path: '/',
           element:  <Home></Home>
        },
        {
           path: 'menu',
           element:  <Menu></Menu>
        },
        {
           path: 'order/:category',
           element:  <Order></Order>
        },
        {
           path: 'login',
           element:  <Login></Login>
        },
        {
          path: 'signup',
          element:  <SignUp></SignUp>
       },
       {
        path: 'contact',
        element: <Contact></Contact>
       },

      ],
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'userhome',
          element:<UserHome></UserHome>
        },
        {
          path: 'mycart',
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'reservation',
          element: <Reservation></Reservation>
         },
         {
          path: 'manageItems',
          element: <ManageItems></ManageItems>
         },
         {
          path: 'addReview',
          element: <AddReview></AddReview>
         },
         {
          path: 'history',
          element: <PaymentHistory></PaymentHistory>
         },
         {
          path: 'booking',
          element: <Booking></Booking>
         },

        //Admin routes
        {
          path: 'adminhome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'allusers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'addItem',
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: 'manageItem',
          element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
        },
      ]
    }
  ]);
  