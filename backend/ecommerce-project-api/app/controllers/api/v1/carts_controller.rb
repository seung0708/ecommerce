class Api::V1::CartsController < ApplicationController

   def index
        carts = Cart.all
        render json: carts
   end 

   def show
        cart = Cart.find_by(id: params[:id])
        render json: cart
   end 

   def update
       cart = Cart.find(params[:id])
       cart.update
       render json: cart
   end

   def newcart
        added_product = Product.find(cart_params[:product_id])
        quantity = cart_params[:quantity]

        cart = Cart.create(cart_params)
        cart_items = CartItem.new(cart_id: cart.id, product_id: cart_params[:product_id], quantity: cart_params[:quantity] item_price: added_product.price * quantity)
        cart_items = cart.cart_items

        total = 0 
        total_quantity = 0
        cart.cart_items.each { |item|} total += item.price}
        cart.total_price = total

        cart.cart_items.each { |item| total_quantity += item.quantity}
        cart.total_qty = total_quantity
        cart.save

        render json: cart
    end 

   private 

    def cart_params
        params.require(:cart).permit(:product_id, )
    end 
end
