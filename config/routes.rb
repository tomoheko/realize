Rails.application.routes.draw do
  devise_for :users
  root "top#index"
  resources :tasks, only: [:new, :create]
end
