import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Coverage from "../pages/Coverage/Coverage";
import SendParcel from "../pages/SendParcel/SendParcel";
import PrivetRoutes from "./PrivetRoutes";
import DashBoardLayout from "../Layout/DashBoardLayout";
import MyParcels from "../pages/DashBoard/MyParcels/MyParcels";
import Payment from "../pages/DashBoard/Payment/Payment";
import PaymentHistory from "../pages/DashBoard/PaymentHistory/PaymentHistory";
import TrackParcel from "../pages/DashBoard/TrackParcel/TrackParcel";
import BeARider from "../pages/DashBoard/BeARider/BeARider";

import ActiveRiders from "../pages/DashBoard/ActiveRiders/ActiveRiders";
import MakeAdmin from "../pages/DashBoard/MakeAdmin/MakeAdmin";
import Forbidden from "../pages/Forbidden/Forbidden";
import AdminRoutes from "./AdminRoutes";
import AssignRider from "../pages/DashBoard/AssignRider/AssignRider";
import PendingRiders from "../pages/DashBoard/PendingRiders/PendingRiders";
import RiderRoutes from "./RiderRoutes";
import PendingDeleveries from "../pages/DashBoard/PendingDeleveries/PendingDeleveries";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout></RootLayout>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/beARider',
          element:<PrivetRoutes><BeARider></BeARider></PrivetRoutes>,
          loader:()=>fetch('serviceCenter.json')
        },
        {
          path:'/coverage',
          element:<Coverage></Coverage>,
          loader:()=>fetch('serviceCenter.json')
        },
        {
          path:'/sendParcel',
          element:<PrivetRoutes><SendParcel></SendParcel></PrivetRoutes>,
          loader:()=>fetch('serviceCenter.json')
        },
        {
          path:'/forbidden',
          element:<Forbidden></Forbidden>
        }
    ]
  },

  // Auth related routes
  {
    path:'/',
    element:<AuthLayout></AuthLayout>,
    children:[
     {
       path:'login',
      element:<Login></Login>
     },  {
       path:'register',
      element:<Register></Register>
     }
    ]
  },

  // Dashboard Layout and routes
  {
    path:'/dashboard',
    element: <PrivetRoutes>
       <DashBoardLayout></DashBoardLayout>
       </PrivetRoutes>,
    children:[
      {
        path:'myParcels',
        element:<MyParcels></MyParcels>
      },
      {
        path:'payment/:parcelId',
        element:<Payment></Payment>
      },
      {
        path:'paymentHistory',
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path:'trackParcel',
        element:<TrackParcel></TrackParcel>
      },
      // rider only routes
      {
        path:'pendingDelivery',
        element:<RiderRoutes><PendingDeleveries></PendingDeleveries></RiderRoutes>
      },

      // admin only routes
      {path:'pendingRider',
        element:<AdminRoutes> <PendingRiders></PendingRiders></AdminRoutes>

      },
      {
        path:'activeRider',
        element:<AdminRoutes><ActiveRiders></ActiveRiders></AdminRoutes> 

      },
      {
        path:'makeAdmin',
       
        element:<AdminRoutes><MakeAdmin></MakeAdmin></AdminRoutes>
      },
      {
        path:'assignRider',
        element:<AdminRoutes><AssignRider></AssignRider></AdminRoutes>
      }

    ]
  }
]);