// import axios from "axios";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";

// const axiosSecure=axios.create({
//     baseURL:`http://localhost:5000`
// })

// const useAxiosSecure = () => {
  // const navigate=useNavigate();
//     const {user,logOut}=useAuth();
//     axiosSecure.interceptors.request.use(config=>{
//         config.headers.Authorization=`Bearer ${user.accessToken}`
//        return config; 

//     },error=>{
//          return Promise.reject(error);
//     })
// axiosSecure.interceptors.request.use(res=>{
            //  return res},error=>{
              // const status=error.status;
              // if(status===403){
                    // Navigate('/forbidden')

              // }
              //else if(status===401){
              // logOut()
              // .then(()=>{
              //     // Navigate('/login')
              // })
                  

              // }

              // })

//     return axiosSecure;
// };

// export default useAxiosSecure;

import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";


const axiosSecure = axios.create({
  baseURL: `http://localhost:5000`,
});

const useAxiosSecure = () => {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) return;

    const interceptor = axiosSecure.interceptors.request.use(
      async (config) => {
        if (user) {
          const token = await user.getIdToken(); // ✅ Firebase ID Token
          config.headers.authorization = `Bearer ${token}`; // ✅ lowercase
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosSecure.interceptors.request.eject(interceptor);
    };
  }, [user, loading]);

  return axiosSecure;
};

export default useAxiosSecure;
