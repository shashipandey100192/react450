import React from 'react'
import Delhibranch from './Delhibranch'
import Noidabranch from './Noidabranch'


const username = "kumar singh";
const empn=["ravi","singh"];
function Mainbranch() {

    const msg = ()=>{
        alert("welcome");

    }
    
  return (
   <div className='container-fluid'>
    <div className='row'>
        <div className='col-md-6'>
            <h1>parent page {username}</h1>
        </div>
    </div>
    <div className='row'>
        <div className='col-md-6 p-3 bg-info'>
            <Delhibranch emp={username}  empname={empn} message = {msg}></Delhibranch>
        </div>
        <div className='col-md-6 p-3 bg-warning'>
    
        </div>
    </div>
   </div>
  )
}

export default Mainbranch