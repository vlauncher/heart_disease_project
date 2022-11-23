import React,{useEffect} from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { login,reset} from '../../features/slices/authSlice'
import { toast } from 'react-toastify'


const Login = () => {

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
    const{email,password} = data;
    const userData = {
        email,password
    }
    dispatch(login(userData));
  };

  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="signup-container">
                    <h2 className="signup-header text-center my-4">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-2">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" {...register("email",{ required : true })}/>
                            {errors.email && <span style={{ color : 'red' }}>Email cant be empty</span>}
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" {...register("password",{ required : true })}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                      </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;