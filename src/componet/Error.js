



import React from 'react'
import { useNavigate,Link } from 'react-router-dom'

const Error = () => {
  const navigate=useNavigate();
  return (
    <>
    <div> 404 not Fonund </div>
   <Link> <button onClick={()=> navigate(-1)}> Go Back </button> </Link> 
    </>
  )
}

export default Error