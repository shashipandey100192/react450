import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Productdetailspage() {
    const [product, setproduct]=useState({})
    const {id} = useParams();
    console.log(id);


            const myapi = ()=>{
                axios.get(`https://dummyjson.com/products/${id}`).then((d)=>{
                    console.log(d.data);
                    setproduct(d.data)
                })
            }
            useEffect(()=>{
                myapi();
            },[])



  return (
    <div  className='container-fluid'>
        <div className='row'>
            <div className='col-md-5'>
                <img src={product.thumbnail} alt={product.id} className='img-fluid'/>
            </div>
            <div className='col-md-7'>
                <p className='h4'>Product Id :{product.id} </p>
                <p className='h6'>Title : {product.title}</p>
                <hr/>
                <p>Description : {product.description}</p>
                <p className='h3'>Price : {product.price}</p>
                <p className='h4 text-success'>Stock : {product.stock}</p>
                <p>Brand : {product.brand}</p>
            </div>
        </div>
    </div>
  )
}

export default Productdetailspage