Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do 
    namespace :v1 do
      resources :products
      resources :carts
      resources :cart_items
      resources :users
      resources :sessions 
    end
  end 
  post "/api/v1/login", to: "api/v1/sessions#create"
  post "/api/v1/signup", to: "api/v1/users#create"
  delete "/api/v1/logout", to: "api/v1/sessions#logout"
  get "/api/v1/logged_in", to: "api/v1/sessions#logged_in"
  
  get '/carts/newcart', to: 'carts#newcart'

  post '/api/v1/cart_items', to: 'cart_items#create'
  get  '/api/v1/cart_items/:id', to: 'cart_items#show'

  get '/api/v1/products', to: 'products#index'
  get '/api/v1/products/:id', to: 'products#show'

end
