//stateless component
import React from 'react'
//import ProductContainer from './ProductContainer'
///import Navbar from '../components/NavBar'
import About from './About'

import ProductList from './ProductList'

const Home = () => {
    return(
        <div className="home">
            <div>
              <About />
              <ProductList />
            </div>
            
        </div>
    )
}

export default Home

    