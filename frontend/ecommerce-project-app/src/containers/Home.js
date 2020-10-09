import React from 'react';
//import { connect } from 'react-redux'
import ProductCard from '../components/ProductCard'

class Home extends React.Component {
  render(){
      return(
        <div className="home">
          <h1>Welcome to VHS Nostalgia</h1>
          <div className="home-products">
            <div>
            {this.props.products.map( product =>
              <section>
              <ProductCard key={product.id} product={product} />
              </section>
              )}
            </div>
          </div> 
        </div>             
      )
  }


}



export default Home 