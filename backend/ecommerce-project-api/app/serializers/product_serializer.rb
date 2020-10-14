class ProductSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :image, :price
end
