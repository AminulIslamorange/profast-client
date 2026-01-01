
import { useForm } from 'react-hook-form';

import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
import { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Register = () => {
    const {createUser,updateUserProfile}=useAuth();
    const axiosPublic=useAxiosPublic();
    const [profilePic, setProfilePic] = useState('');
     const { register, handleSubmit, formState: { errors } } = useForm();
     const location =useLocation();
     const navigate=useNavigate();
      const from = location.state?.from?.pathname || "/";
   

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(async(result) => {
                console.log(result.user)
                // update user on the database
                 const userInfo = {
                    email: data.email,
                    role: 'user', // default role
                    created_at: new Date().toISOString(),
                    last_log_in: new Date().toISOString()
                }
                 const userRes = await axiosPublic.post('/users', userInfo);
                console.log(userRes.data);



                // update user profile in firebase
                const userProfile={
                    displayName:data.name,
                photoURL:profilePic}
                updateUserProfile(userProfile)
                .then(() => {
              // Profile updated!
               // ...
                 })
                 
             .catch((error) => console.error(error));

                 navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handleimageUpload=async(e)=>{
        const image = e.target.files[0];
        console.log(image)
        const formData = new FormData();
        formData.append('image', image);

        
        const imagUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_KEY}`
        const res = await axios.post(imagUploadUrl, formData)

        setProfilePic(res.data.data.url);


    }

    return (
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Create Account</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">
                      {/* Photo field */}
<div className="form-control w-full">
  <label className="label">
    <span className="label-text font-medium">Photo</span>
  </label>

  <input
    type="file"
    className="file-input file-input-bordered w-full"
    {...register("photo", {
      required: true,
      onChange: (e) => handleimageUpload(e),
    })}
  />

  {errors.photo && (
    <p className="text-red-500 text-sm mt-1">
      Photo is required
    </p>
  )}
</div>

                        {/* name field */}
                        <label className="label">Name</label>
                        <input type="text"
                            {...register('name', { required: true })}
                            className="input" placeholder="Name" />
                        {
                            errors.name?.type === 'required' && <p className='text-red-500'>Name is required</p>
                        }
                        {/* email field */}
                        <label className="label">Email</label>
                        <input type="email"
                            {...register('email', { required: true })}
                            className="input" placeholder="Email" />
                        {
                            errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>
                        }

                        <label className="label">Password</label>
                        <input type="password" {...register('password', { required: true, minLength: 6 })} className="input" placeholder="Password" />
                        {
                            errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>
                        }
                        {
                            errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters or longer</p>
                        }

                        <div><a className="link link-hover">Forgot password?</a></div>
                         <button className="btn w-full mt-4 bg-[#CAEB66] text-black font-bold border-none">
                                   Sign Up
                                  </button>
                                </fieldset>
                                  <p>Have  an Account?<Link to='/login' className="mx-1 underline text-purple-600">Login</Link></p>
                              </form>
                              <SocialLogin></SocialLogin>
                
            </div>
        </div>
    );
};

export default Register;