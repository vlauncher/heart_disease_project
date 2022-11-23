import React,{useEffect} from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { userregister,reset} from '../../features/slices/authSlice'
import { toast } from 'react-toastify'


const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user,isError,isSuccess,message} = useSelector((state)=>state.auth)

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }
        if(isSuccess || user){
            navigate('/')
        }
        dispatch(reset())
    },[isError,isSuccess,message,user,navigate,dispatch])

  const onSubmit = data => {
      if(data.password !== data.re_password){
        toast.error('Passwords do not match');
    }
    const{first_name,last_name,email,password} = data;
    const userData = {
        first_name,last_name,email,password
    }
    dispatch(userregister(userData));
  };

  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="signup-container">
                    <h2 className="signup-header text-center my-4">SignUp</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-2">
                            <label className="form-label">First Name</label>
                            <input type="text" name="first_name" {...register("first_name",{ required : true })} className="form-control"/>
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Last Name</label>
                            <input type="text" name="last_name" {...register("last_name",{ required : true })} className="form-control"/>
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" {...register("email",{ required : true })}/>
                            {errors.email && <span style={{ color : 'red' }}>Email cant be empty</span>}
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" {...register("password",{ required : true })}/>
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Confirm Password</label>
                            <input type="password" name="re_password" className="form-control" {...register("re_password",{ required : true })} />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                      </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register