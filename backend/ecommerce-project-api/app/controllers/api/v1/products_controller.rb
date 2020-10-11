class Api::V1::ProductsController < ApplicationController
    

    def index
        products = Product.all
        render json: products, status: 201 
    end 

    def show
        product = Product.find(params[:id])
        render json: product
    end

    def current_user_products
        if logged_in?
            @products = current_user.products 
            render json: products
        else
            render json: { notice: "You haven't uploaded any products!"}
        end 
    end 

    def create
        @product = current_user.products.build(product_params)
        if @product.save
            render json: products, status: created
        else 
            error_resp = {error: @product.errors.full_messages.to_sentence}
            render json: error_resp, status: unprocessable_entity
        end 
    end

    def update
        @product = Product.find_by(id: params[:id])
        if @product.update(product_params)
            render json: product
        else 
            error_resp = {
                error: @product.errors.full_messages.to_sentence,
                invalid_user: "You don't have acces to this product"
            }
            render json: error_resp, status: unprocessable_entity
        end 
    end

    def product_params
        params.require(:product).permit(:title, :description, :image, :price, :quantity)
    end 

end
