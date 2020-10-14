import React from 'react'

import {NavLink} from 'react-router-dom'


const Navbar = () =>{ 
    return(
    
    <div className="nav-container">
        <div className="right">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products/new">Add a New Product</NavLink>
        </div>   
        
    </div>
            
   
        
    )
}

export default Navbar