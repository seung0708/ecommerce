Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do 
    namespace :v1 do 
     resources :products, only: [:index]
     resources :carts, only: [:show, :destroy]
     resources :cart_items, only: [:create, :destroy]
    end 
  end 


end
