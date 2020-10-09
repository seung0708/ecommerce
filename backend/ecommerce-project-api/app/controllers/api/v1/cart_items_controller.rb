class Api::V1::CartItemsController < ApplicationController
    
  def create
    cart = Cart.find(cart_items_params[:cart_id])
    cart_items = cart.cart_items

    found_item = cart_items.detect do |item| 
      cart_items_params[:product_id] == item.product_id
    end 
    if found_item
        found_item.quantity += cart_items_params[:quantity].to_i
        found_item.item_price = found_item.quantity * found_item.product.price 
        found_item.save
    else 
      cart_item = CartItem.create(cart_items_params)
      cart_item.item_price = cart_item.quantity * cart_item.product.price 
      cart_item.save
   end

    total = 0
    total_quantity = 0

    cart = Cart.find(cart_items_params[:cart_id])
    cart.cart_items.each {|item| total += item.item_price}
    cart.total_price = total

    cart.cart_items.each { |item| total_quantity += item.quantity}
    cart.total_qty = total_quantity
    cart.save

    render json: cart
  end 

  def destroy
    cart_item = CartItem.find(params[:id])
    cart_item.destroy 
    cart = Cart.find(:cart_id)
    total = 0
    cart.cart_items.each { |item| total += item.item_price}
    cart.total_price = total
    cart.save
    render json: cart

  end

  private
    def cart_items_params
      params.require(:cart_item).permit(:product_id, :cart_id, :quantity)
    end 

end
