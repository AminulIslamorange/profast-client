import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Coverage from "../pages/Coverage/Coverage";

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
          path:'/coverage',
          element:<Coverage></Coverage>,
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
  }
]);