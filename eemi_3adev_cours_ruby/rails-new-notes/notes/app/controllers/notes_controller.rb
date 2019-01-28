class NotesController < ApplicationController

  #Appelé avant chaque action (show, delete...)
  #before_action permet de forcer l'authentification de l'utilisateur, sauf pour les méthodes précisées dans except. 
  before_action :authenticate_user!, except: [:new, :create]

  def index
    #@notes = Note.all
    @notes_sans_id = Note.where(user_id:nil)
    @my_notes = current_user&.notes || []
    @notes = current_user.notes.all  #if user_signed_in? ? : current_user.notes.all : []
    #On appelle le modèle Note (models > note.rb). 
  end

  def new
    @note = Note.new
  end

  def create
    #raise note_params.inspect
    #@note = Note.new(note_params)
    @note = Note.new(note_params.merge({user_id: current_user&.id})) #merge : prend un hash en paramètre et le rajoute
    if @note.save
      redirect_to notes_path #accueil
    else
      #affiche la vue new si la nouvelle note n'a pas été insérée
      render :new 
    end
  end

  def edit
    @note = Note.find_by(id: params[:id])
  end

  def update
   # raise params.inspect #debugger
   #@note = Note.find_by(id: params[:id])
   @note = current_user.notes.find_by(id: params[:id])
   if @note.update_attributes(note_params)
     redirect_to notes_path #accueil
   else
     #affiche la vue edit si la nouvelle note n'a pas été insérée
     render :edit
   end
  end

  def claim
    note = Note.find_by(id: params[:id])
    if note && note.update_attributes(user: current_user)
      flash[:success] = 'Note bien claim'
    else
      flash[:error]= 'Impossible de claim cette note'
    end
    redirect_to notes_path
  end

  def destroy
    #@note = Note.find_by(id: params[:id])
    note = Note.find_by(id: params[:id])
    if (note.user_id == nil || note.user_id == current_user.id) && note.destroy
      flash[:success] = "Note supprimée"
    else
      flash[:error] = "Oups ! Pas supprimée"
    end
    redirect_to notes_path
  end

private
  def note_params
    #récupère les paramètres qui arrivent sur le controller. 
    params.require(:note).permit(:title, :content)
  end
end