class CartProduct < ApplicationRecord
    belongs_to :cart, optional: true
    belongs_to :product, optional: true

    def total_price 
        self.quantity * self.product.price
    end 

end
