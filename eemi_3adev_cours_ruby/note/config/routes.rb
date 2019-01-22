Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :notes, except: [:edit, :update, :show]
  #On déclare une ressource, controller model vues --> TOUT EST LIE A CE NOM LA, au pluriel car sur plusieurs notes ...
  #Le modele c'est une image d'un record dans la page
  #Le only index sert à dire qu'on utilise que la méthode index, car il nous crée show edit update new create delete

  root to: "notes#index" #Permet de dire que l'url principale "/" nous menerea a la vue index
end