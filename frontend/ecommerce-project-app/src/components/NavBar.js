import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = ({cartCounter}) =>{ 
    return(
        <nav>
        <div className="nav-wrapper blue lighten-2">
          <ul className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
    <li> <Link to='/cart' >Cart{cartCounter}</Link></li>
          </ul>
        </div>
      </nav>
   
        
    )
}

export default Navbar