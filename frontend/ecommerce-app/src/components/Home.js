import React from 'react'
import About from './About'
import ProductList from '../containers/Products'



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

    