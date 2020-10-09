class Api::V1::CartItemsController < ApplicationController

    def create
        chosen_product = Product.find(params[:product_id])
        current_cart = @current_cart 

        if current_cart.products.include?(chosen_product)
            @cart_item = current_cart.cart_items.find_by(:product_id => chosen_product)
            @line_tiem.quantity += 1
        else
            @cart_item = CartItem.new
            @cart_item.cart = current_cart
            @cart_item.product = chosen_product
        end

        @cart_item.save
        render json: @cart_items, status: 201 

    end 

    def destroy
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy
      end 


    def add_quantity
        @cart_item = CartItem.find(params[:id])
        @cart_item.quantity += 1
        @cart_item.save
        redirect_to cart_path(@current_cart)
      end
      
      def reduce_quantity
        @cart_item = CartItem.find(params[:id])
        if @cart_item.quantity > 1
          @cart_item.quantity -= 1
        end
        @cart_item.save
        redirect_to cart_path(@current_cart)
      end
end
