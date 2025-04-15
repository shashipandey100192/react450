import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";

function User_Loginpage() {
    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-5 border bg-light shadow p-3'>
                    <div className='container-fluid'>
                        <div className='row'>
                        <div className='col-12 text-center'>
                            <h1><FaUserAlt/></h1>
                                <p className='h4 p-3'> Login Page </p>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="email" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-12 text-center'>
                                <div class="mb-3">
                                   
                                    <input type="button" class="btn btn-success" value="login"/>
                                    <input type="button" class="btn btn-danger ms-3" value="cancel"/>
                                    <Link to="/registor" className='ms-3'>New User</Link>
                                </div>
                                </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default User_Loginpage