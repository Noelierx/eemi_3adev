class NotesController < ApplicationController

  def index
    @notes = Note.all
  end

  def show
    @note = Note.find_by({ id: params[:id] })
  end

  def new
    @note = Note.new
  end

  def create
    @note = Note.new(note_params)
    if @note.save
      redirect_to notes_path, { flash: { success: 'Créée avec succès' } }
    else
      flash[:error] = 'Impossible de créer cette note'
      reander :new
    end
  end

  def destroy
    note = Note.find_by({ id: params[:id] })
    if note && note.destroy
      flash[:success] = 'Note supprimée avec succès'
    else
      flash[:error] = 'Impossible de supprimer cette note'
    end
    redirect_to notes_path
  end

  def edit
    @note = Note.find_by({ id: params[:id] })
  end

  def update
    @note = Note.find_by({ id: params[:id] })
    if @note && @note.update_attributes(note_params)
      redirect_to notes_path, { flash: { success: 'Note mise à jour avec succès' } }
    else
      flash[:error] = 'Impossible de mettre à jour cette note'
      render :edit
    end
  end

  private
  def note_params
    params.require(:note).permit(:title, :content)
  end
end