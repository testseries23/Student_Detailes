



import { Link, NavLink } from "react-router-dom"

const Header = () => {
const navLinkStyle= ({isActive})=>{
  return{
    
    textDecoration: isActive ? "none" : "underline",
    color: isActive ? "red": "white"
  }

}
  return (
    <div className='header'>
      <NavLink style={navLinkStyle} to={'/app'}> Home </NavLink>
     <NavLink style={navLinkStyle} to={'/about'}> <h1> About</h1>  </NavLink>
      <Link to={'/contact'}> <h1 style={{color:'white', cursor:'pointer'}}> Contact </h1></Link>
    </div>
  )
}

export default Header