import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './Slicerlistpage'



function Myreduxpage() {

const myage = useSelector((state) => state.counter.age)
const dispatch = useDispatch();

    return (
    <div>
        <p>Myreduxpage</p>
        <h1>{myage}</h1>
         <button onClick={() => dispatch(decrement())}>Decrement</button>
    
    
    </div>
  )
}

export default Myreduxpage