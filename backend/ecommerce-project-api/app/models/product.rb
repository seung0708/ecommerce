class Product < ApplicationRecord
    has_many :carts, through: :cart_items
    belongs_to :user, optional: true
end
