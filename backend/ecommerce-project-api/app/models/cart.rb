class Cart < ApplicationRecord
    
    has_many :products, through: :cart_items
    belongs_to :user
    
end
