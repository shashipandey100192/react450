import React from 'react'
import Noidabranch from './Noidabranch'

function Delhibranch(props) {
  return (
    <div className='container-fluid'>
    <div className='row'>
        <div className='col-12'>
            <h1>Delhi Branch {props.emp} </h1>
            <p>{props.empname}</p>
            <select>
                {props.empname.map((e)=>{
                    return <option>{e}</option>
                })}
            </select>
            <input type='button' value="show message" onClick={props.message}/>

            <Noidabranch empdet={props.empname}></Noidabranch>
        </div>
    </div>
   </div>
  )
}

export default Delhibranch