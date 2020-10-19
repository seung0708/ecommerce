class CartProductSerializer 
  include FastJsonapi::ObjectSerializer
  attributes  :cart, :product, :quantity

  
end
