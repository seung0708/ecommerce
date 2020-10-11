Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do 
    namespace :v1 do
      resources :products
      resources :carts
      resources :cart_items
      resources :users
    end
  end 
  post "/api/v1/login", to: "api/v1/sessions#create"
  post "/api/v1/signup", to: "api/v1/users#create"
  delete "/api/v1/logout", to: "api/v1/sessions#destroy"
  get "/api/v1/get_current_user", to: "api/v1/sessions#get_current_user"
  
  get '/carts/newcart', to: 'carts#newcart'

  post '/api/v1/cart_items', to: 'cart_items#create'
  get  '/api/v1/cart_items/:id', to: 'cart_items#show'


end
