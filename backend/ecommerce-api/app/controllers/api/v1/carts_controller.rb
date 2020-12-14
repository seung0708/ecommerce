class Api::V1::CartsController < ApplicationController
    def show
        @cart = @current_cart
        render json: @cart
    end

    def destroy
        @cart = @current_cart
        @cart.destroy 
        session[:cart_id] = nil
    end

end 