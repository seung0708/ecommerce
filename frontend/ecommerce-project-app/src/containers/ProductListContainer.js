import React from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../actions/productsAction'
//import ProductList from '../components/ProductList'

class ProductListContainer extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProducts())
      }
    

    render() {
        const { error, loading, products } = this.props;
    
        if (error) {
          return <div>Error! {error.message}</div>;
        }
    
        if (loading) {
          return <div>Loading...</div>;
        }
        //debugger;
        return (
            <div class="card">
            {products.map(product =>
            <div class="card-body">
              <img className="card-img" src={product.image} alt="card"/>
              <h3 className="card-title">{product.title}</h3>
              <h4 className="card-price">{product.price}</h4>
              <p>{product.description}</p>
              <button>Add to</button>
            </div> )}
            
          </div>
            
        );
     }
    }


    const mapStateToProps = state => ({
        products: state.products.items,
        loading: state.products.loading,
        error: state.products.error
      });
      


export default connect(mapStateToProps)(ProductListContainer)