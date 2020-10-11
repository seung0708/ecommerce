class Api::V1::CartsController < ApplicationController

  def index
    carts = Cart.all
    render json: carts
  end


  def newcart
    cart = current_user.build_cart(carts_params)
    cart_items = CartItem.create(cart_id: cart.id, product_id: cart_params[:product_id])
    cart_items = cart.cart_items

    render json: cart_items 
  end 
  
end 