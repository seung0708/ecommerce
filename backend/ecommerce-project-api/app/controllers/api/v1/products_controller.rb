class Api::V1::ProductsController < ApplicationController

    def index
        products = Product.all
        render json: products, status: 201 
    end 

    def show
        product = Product.find(params[:id])
        render json: product
    end

end
