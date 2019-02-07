Rails.application.routes.draw do
  root 'appointments#index'
  get '*path', to: 'appointments#index'
  resources :appointments
end
