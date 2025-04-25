import React from 'react'

function Noidabranch(props) {
  return (
    <div className='container-fluid'>
    <div className='row'>
        <div className='col-12'>
            <h1>Noida branch</h1>
            <select>
                {props.empdet.map((e)=>{
                    return <option>{e}</option>
                })}
            </select>
        </div>
    </div>
   </div>
  )
}

export default Noidabranch