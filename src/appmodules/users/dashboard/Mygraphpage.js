import axios from 'axios';
import React,{useState,useEffect} from 'react';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Rectangle,
    ResponsiveContainer,
} from "recharts";

// const data = [
//     {
//         name: "Page A",
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: "Page B",
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
//     {
//         name: "Page C",
//         uv: 2000,
//         pv: 9800,
//         amt: 2290,
//     },
//     {
//         name: "Page D",
//         uv: 2780,
//         pv: 3908,
//         amt: 2000,
//     },
//     {
//         name: "Page E",
//         uv: 1890,
//         pv: 4800,
//         amt: 2181,
//     },
//     {
//         name: "Page F",
//         uv: 2390,
//         pv: 3800,
//         amt: 2500,
//     },
//     {
//         name: "Page G",
//         uv: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
// ];


function Mygraphpage() {

const [product, setproduct]=useState([])

    const myapi = ()=>{
        axios.get('https://dummyjson.com/products').then((d)=>{
            setproduct(d.data.products)
        })
    }
    useEffect(()=>{
        myapi();
    },[])


    return (
        <div className='container-fluid bg-dark'>
            <div className='row'>
                <div className='col-12 pt-3'>
                    <select>
                        {product.map((d)=>{
                            return <option>{d.category}</option>
                        })}
                    </select>
                    <ResponsiveContainer width={"100%"} height={400}>
                        <BarChart
                            data={product}>
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            <XAxis dataKey="category" />
                            {/* <YAxis /> */}
                            <Tooltip />
                            <Bar
                                dataKey="stock"
                                fill="red"
                            />
                             <Bar
                                dataKey="price"
                                fill="blue"
                            />
                            
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default Mygraphpage