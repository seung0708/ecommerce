class Api::V1::ProductsController < ApplicationController

    def index
        @products = Product.all
        render json:  ProductSerializer.new(@products)
    end

    def show
        @product = Product.find_by(id: params[:id])
        render json: ProductSerializer.new(@product)
    end


end
