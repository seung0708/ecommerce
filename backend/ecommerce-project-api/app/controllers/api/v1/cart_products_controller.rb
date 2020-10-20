class Api::V1::CartProductsController < ApplicationController
    def index
        #byebug
        @cart_products = CartProduct.all
        
        render json: CartProductSerializer.new(@cart_products)
    end


    def create
       #byebug
        current_cart = @current_cart
        added_product = Product.find(params[:id])

        if current_cart.products.include?(added_product)
            @cart_product = current_cart.cart_products.find_by(:product_id => added_product)
            @cart_product.quantity += 1
            render json: CartProductSerializer.new(@cart_product)
        else 
        @cart_product = CartProduct.new
        @cart_product.cart = current_cart
        @cart_product.product = added_product
        @cart_product.quantity = 1
    
        @cart_product.save 
        render json: CartProductSerializer.new(@cart_product)
        end
    end

    def show
        @cart_product = CartProduct.find_by(id: params[:id])
        render json: CartProductSerializer.new(@cart_product)
    end

    def destroy
        @cart_product = CartProduct.find_by(id: params[:id])
        @cart_product.destroy
    end

end 