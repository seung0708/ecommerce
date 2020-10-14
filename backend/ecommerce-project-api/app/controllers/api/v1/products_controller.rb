class Api::V1::ProductsController < ApplicationController

    def index
        @products = Product.all
        render json:  ProductSerializer.new(@products)
    end

    def show
        @product = Product.find_by(id: params[:id])
        render json: ProductSerializer.new(@product)
    end

    def create
        @product = Product.new(product_params)

        if @product.save 
            render json: ProductSerializer.new(@product)
        else 
            render json: {
                error: "There was a problem in adding your product"
            }
        end 
    end

    private 
    def product_params
        params.require(:product).permit(:title, :description, :image, :price)
    end 

end
