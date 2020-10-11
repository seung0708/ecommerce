class Api::V1::CartItemsController < ApplicationController
  def create
    
    cart = Cart.find(cart_item_params[:cart_id])

    cart_items = cart.cart_items 

    product_added = cart_items.find {|item| cart_item_params[:product_id] == item.product_id }

    if product_added 
      product_added.save
      render json: cart_item
    end 
  end

  private 
  def cart_item_params
    params.require(:cart_item).permit(:product_id, :cart_id, :quantity, :item_price)
  end 

end