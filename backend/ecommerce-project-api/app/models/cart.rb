class Cart < ApplicationRecord
    has_many :products, through: :cart_items

    def add_product(product_params)
        current_product = cart_items.find_by(product_id: product_params[:product][:product_id])
        if 
    end 
end
