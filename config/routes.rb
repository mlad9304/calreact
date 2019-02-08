Rails.application.routes.draw do
  root 'appointments#index'
  resources :appointments
  get '*path', to: 'appointments#index'
end
