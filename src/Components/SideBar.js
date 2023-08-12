import React from 'react'
import "../Style/Sidebar.css"
import { Link } from 'react-router-dom'
const SideBar = () => {
  return (
    <div className='sidebar-main'>
      <Link to="/" className='link'> <h2 >Dashboard</h2></Link>
       <Link to="/departments" className='link'><h2 >Departments</h2></Link>
       <Link to="/departments" className='link'><h2>Products</h2></Link>
        
    </div>
  )
}

export default SideBar