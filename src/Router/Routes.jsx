import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Authentication/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout></RootLayout>,
    children:[
        {
            path:'/',
            element:<Home></Home>
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
     }
    ]
  }
]);