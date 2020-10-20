class Cart < ApplicationRecord
    has_many :cart_products
    has_many :products, through: :cart_products

    def sub_total
        sum = 0 
        self.cart_products.each do |cart_products| 
            sum += cart_product.total_price 
        end 
        return sum
    end 
end
