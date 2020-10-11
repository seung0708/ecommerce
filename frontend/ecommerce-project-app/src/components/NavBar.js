import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Login  </Link></li>
                        
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar