import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserPlus } from "react-icons/fa";
import { useForm } from 'react-hook-form';

function User_Registorpage() {

    const {register,handleSubmit,formState: { errors }} = useForm()

    const submitform = (e)=>{
        console.log(e);
    }

  return (
    <form onSubmit={handleSubmit(submitform)}>
    <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-8 border bg-light shadow p-3'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center mb-3'>
                                <h1> <FaUserPlus/></h1>
                                <p className='h4'>New User Registor </p>
                            </div>
                        <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Full Name</label>
                                    <input type="text" class="form-control" {...register("fullname",{required:true})}/>
                                    {errors.fullname && <p className='text-danger'>fullname is required</p>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" {...register("email")}/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Phone No</label>
                                    <input type="text" class="form-control" {...register("phone",{required:true,minLength:10,maxLength:10})}/>
                                    {errors.phone?.type==='required' && <p className='text-danger'> phone is required</p>}
                                    {errors.phone?.type==='minLength' && <p className='text-warning'> phone is minimum 10</p>}
                                    {errors.phone?.type==='maxLength' && <p className='text-success'> phone is maximum  10</p>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Profile Picture(url only)</label>
                                    <input type="text" class="form-control" {...register("picurl")}/>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Gender</label>
                                    <select className='form-select' {...register("gender")}>
                                        <option hidden>Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" {...register("pass")}/>
                                </div>
                            </div>
                            <div className='col-md-12 text-center'>
                                <div class="mb-3">
                                   
                                    <input type="submit" class="btn btn-success" value="login"/>
                                    <input type="button" class="btn btn-danger ms-3" value="cancel"/>
                                    {/* <Link to="/registor" className='ms-3'>New User</Link> */}
                                </div>
                                </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        </form>
  )
}

export default User_Registorpage