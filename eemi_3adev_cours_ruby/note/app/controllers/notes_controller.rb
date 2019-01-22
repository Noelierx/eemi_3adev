class NotesController < ApplicationController
  def index
    @notes = Note.all #permet de recuperer tous les éléments de la base, et @notes = var d'instance
  end

  def new
    @note = Note.new #tant qu'on a pas appelé save ca ne rentre pas en bdd, c'est loadé mais pas sauvegardé
  end
    
    def create
        note = Note.new(note_params)
        if note.save
            redirect_to notes_path
        else
            render :new
        end
    end
    
    private
    def note_params
        params.require(:note).permit(:title, :content)
    end
    
end