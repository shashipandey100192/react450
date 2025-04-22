import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Myaxiospage() {

const [product, setproduct]=useState([])

    const myapi = ()=>{
        axios.get('https://dummyjson.com/products').then((d)=>{
            // console.log(d.data.products);
            setproduct(d.data.products)
        })
    }
    useEffect(()=>{
        myapi();
    },[])

    return (
        <div className='container-fluid'>
            <div className='row'>
               {product.map((c)=>{
                return(
                    <div className='col-md-3'>
                    <div class="card" >
                         
                        <img src={c.thumbnail} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{c.title}</h5>
                            {/* <p class="card-text">{c.description}</p> */}
                            <Link to={`productdetails/${c.id}`} class="btn btn-primary"> Show Details</Link>
                        </div>
                    </div>
                </div>
                )
               })}
            </div>
        </div>
    )
}

export default Myaxiospage