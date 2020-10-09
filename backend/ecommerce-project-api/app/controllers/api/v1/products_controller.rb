class Api::V1::ProductsController < ApplicationController

    def index
       
        @products = Product.all
        render json: @products, status: 201 
    end 
end
