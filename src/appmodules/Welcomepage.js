import React from 'react'
import { FaUserSecret } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Welcomepage() {
  return (
<div class="container py-5">
  <h2 class="text-center mb-4">Select Account Type to Login</h2>
  <div class="row justify-content-center">


    <div class="col-md-3">
      <div class="card login-card">
        <Link to='userlogin' class="card-body text-center">
           <h1><FaUserSecret/></h1>
          <h5 class="card-title">User Login</h5>
        </Link>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card login-card ">
        <a href='#' class="card-body text-center">
           <h1><FaUserSecret/></h1>
          <h5 class="card-title">Admin Login</h5>
        </a>
      </div>
    </div>

  </div>
</div>
  )
}

export default Welcomepage