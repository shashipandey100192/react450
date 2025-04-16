import React from 'react'
import {user} from '../../Mydata.js';
console.log(user);

function User_Mainpage() {


  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3'>
          <div className='card p-3 m-2 shadow bg-success text-white'>
            <p className='h4'>Total : {user.length}</p>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='card p-3 m-2 shadow bg-warning text-white'>
            <p className='h4'>Female : {user.filter((d)=>{return d.gender==="female"}).length}</p>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='card p-3 m-2 shadow bg-info text-white'>
            <p className='h4'>Male : {user.filter((d)=>{return d.gender==="male"}).length}</p>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='card p-3 m-2 shadow bg-danger text-white'>
            <p className='h4'>Total : 5400</p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-7'>
          <div className='card'>
            <h1>Graph</h1>
            <h1>Graph</h1>
            <h1>Graph</h1>
            <h1>Graph</h1>
            <h1>Graph</h1>
            
          </div>
        </div>
        <div className='col-md-5'>
        <div className='card'>
            <h1>Graph</h1>
            <h1>Graph</h1>
            <h1>Graph</h1>
            <h1>Graph</h1>
            <h1>Graph</h1>
            <h1>Graph</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User_Mainpage