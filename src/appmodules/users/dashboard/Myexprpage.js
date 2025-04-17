import React, { useState } from 'react'
import { product } from './Mydatalist';

function Myexprpage() {

const [sv,sf]=useState("rohit");

const name = "kumar singh";
let age =80;
const students = ["rohit","mohan","jai","pooja","ramu","raju"];

const myfunc = ()=>{
    sf("this is mohit");
}

const abc = (e)=>
{
    console.log(e);
    sf(e.target.value);

}

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12 page'>
                <h1>sdfhjsdf</h1>
                   <h2>username is: {name} ang is :{age}</h2> 
                   <h3>{students}</h3>
                   <h3>{80+90}</h3>
                   <h3>{age>=100  ? "ok" : "no"}</h3>
                  <p> {sv}</p>
                   <input type="button" value="change" onClick={myfunc}/>
                   <input type='text' value={sv} onInput={abc}/>
            </div>
        </div>
    </div>
  )
}

export default Myexprpage