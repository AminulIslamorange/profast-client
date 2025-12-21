import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home/Home";

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
]);