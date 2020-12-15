Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

    

  namespace :api do 
    namespace :v1 do
      resources :products, only: [:create, :index, :show ]
      resources :users, only: [:create, :show, :index]
      resources :cart_products
      resources :carts

      post '/login', to: 'sessions#create'
      delete '/logout', to: 'sessions#destroy'
      get '/logged_in', to: 'sessions#is_logged_in?'
    end
  end 
 

end
 