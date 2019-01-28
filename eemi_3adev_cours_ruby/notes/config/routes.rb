Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :notes, only: [:index, :new, :create, :show, :delete]
  # , except: [:show]
  resources :notes do
    member do
      put 'claim'
      put 'unlink'
    end
  end
  # put 'notes/:id/link-user', action: :claim, controller: 'notes', as: 'notes_link_user'
  # sidekiq:shit
  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'

  root to: "notes#index"

end
