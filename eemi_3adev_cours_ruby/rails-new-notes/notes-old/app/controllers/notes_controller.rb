class NotesController < ApplicationController

   before_action :authenticate_user!

    def index
      @notes = current_user.notes.all
      @free_notes = Note.where(user: nil)
      #On appelle le modèle Note (models > note.rb). 
    end
  
    def new
      @note = Note.new
    end

    def create
      @note = current_user.notes.build(note_params)
      if @note.save
        redirect_to notes_path
      else
        render :new
      end
    end

    def destroy
      @note = 
      @note = current_user.notes.find_by(id: params["id"])
      if @note.destroy
        flash[:success] = "Note supprimée"
      else
        flash[:error] = "Oups ! Pas delete"
      end

      redirect_to notes_path
    end

    def edit
      @note = current_user.notes.find_by(id: params["id"])
    end

    def update
      @note = Note.find_by(id: params["id"])
      if @note.update_attributes(note_params)
        redirect_to notes_path
      else
        render :edit
      end
    end

    private
      def note_params
        params.require(:note).permit(:title, :content)
      end
  end