import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar = (id) =>{ 
    return(
    
    <div className="nav-container">
        <div className="right">
            <NavLink to="/">Home</NavLink>
     
            <NavLink to='/cart' >Cart</NavLink>
        </div>   
        
    </div>
            
   
        
    )
}

export default Navbar