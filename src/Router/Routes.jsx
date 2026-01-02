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
import PendingRiders from "../pages/DashBoard/PendingRiders/PendingRiders";
import ActiveRiders from "../pages/DashBoard/ActiveRiders/ActiveRiders";
import MakeAdmin from "../pages/DashBoard/MakeAdmin/MakeAdmin";

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
      {path:'pendingRider',
        element:<PendingRiders></PendingRiders>

      },
      {
        path:'activeRider',
        element:<ActiveRiders></ActiveRiders>

      },
      {
        path:'makeAdmin',
        element:<MakeAdmin></MakeAdmin>
      }

    ]
  }
]);