



import React from 'react'
import { Link,Outlet } from 'react-router-dom'


const Contact = () => {
  return (
    <>
        <Link to={'insta'}> <h4> contact via instragram </h4> </Link>
        <Link to={'mail'}> <h4> contact via mail </h4> </Link>
        <Outlet/>
    </>
    
  )
}

export default Contact