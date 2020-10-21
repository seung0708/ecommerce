import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar = () =>{ 
    return(
        <nav>
        <div className="nav-wrapper blue lighten-2">
          <ul className="right hide-on-med-and-down">
            <li><NavLink to="/">Home</NavLink></li>
            <li> <NavLink to='/cart' >Cart</NavLink></li>
          </ul>
        </div>
      </nav>
   
        
    )
}

export default Navbar