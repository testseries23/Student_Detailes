




import React from 'react'
import {useState,useEffect } from 'react';
import { Link} from 'react-router-dom';
const Home = () => {
 const [state,setState]=useState(2);
 const [data,setData]=useState([]);
  

  useEffect(()=>{
    async function getData(){
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`)
      
      const res= await get.json();
      setData(res)
      
    }
    getData()
    document.title=`(${state}) Employees online`;
  },[state])
  
  return (
    <div>
        <button onClick={()=>setState(state+2)}> Click me {state} </button>
      {
        data.map((element)=>{
          return(
            <>
            <Link to={`/app/${element.id}`}>
            <div className='data'>
            <h4> {element.firstName}</h4>
            <h4> {element.lastName} </h4>
            <h4> {element.email} </h4>
            </div>
            </Link>
            

            </>
          )
        })
      }
      
    </div>
  )
}

export default Home;