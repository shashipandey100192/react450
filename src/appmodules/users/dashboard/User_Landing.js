import React from 'react'
import App_Header from '../../shares/App_Header'
import App_Sidebar from '../../shares/App_Sidebar'
import User_Mainpage from './User_Mainpage'

function User_Landing() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col g-0'>
          <App_Header></App_Header>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-2'>
          <App_Sidebar></App_Sidebar>
        </div>
        <div className='col-md-10'>
          <div className='card'>
           <User_Mainpage></User_Mainpage>
          </div>
        </div>
      </div>


    </div>
  )
}

export default User_Landing