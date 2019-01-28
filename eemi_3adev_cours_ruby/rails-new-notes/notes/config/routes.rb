Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :notes, except: [:show] do
    member do 
      get :claim
    end
    #
  end
  # Lorsqu'on crée une ressource, on crée le show/edit/update/new/create/delete
  # put 'notes/:id/claim', action: :claim, controller: 'notes', as: 'claim_note'

  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'

  root to: "notes#index"

end