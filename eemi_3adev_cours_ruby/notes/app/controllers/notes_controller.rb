class NotesController < ApplicationController

  before_action :authenticate_user!, except: [:new, :index, :create]

  def index
    # @notes = user_signed_in? ? current_user.notes.all : []
    # @notes = current_user&.notes || []
    @notes = [] || current_user&.notes
    # @free_notes = Note.where(user: nil)
    @free_notes = Note.without_user
  end

  def new
    @note = Note.new
  end

  def create
    # raise note_params
    # @note = Note.new(note_params)
    # @note = current_user.notes.build(note_params)
    @note = user_signed_in? ? current_user.notes.build(note_params) : Note.new(note_params)
    if @note.save
      NotesJob.perform_later(@note)
      redirect_to notes_path
      # redirect_to @note
    else
      # This line overrides the default rendering behavior, which
      # would have been to render the "create" view.
      flash[:errors] = 'Erreur : ' << @note.errors.full_messages.join
      render :new
    end
  end

  def show
    @note = current_user.notes.find_by(id: params[:id])
  end

  def edit
    @note = current_user.notes.find_by(id: params[:id])

    redirect_to notes_path, flash: {error: "Cette note n'existe pas"} unless @note
  end

  def update
    # raise note_params.inspect
    @note = current_user.notes.find_by(id: params[:id])
    if @note.update_attributes(note_params)
      NotesJob.perfom_later(@note)
      flash[:success] = "Update success"
      redirect_to notes_path
    else
      flash[:error] = "Oups ! not updated"
      render :edit
    end
  end

  def claim
    # raise note_params.inspect
    note = Note.find_by(id: params[:id])
    if note.update_attribute(:user_id, current_user.id)
      flash[:success] = "Update success"
      redirect_to notes_path
    else
      flash[:error] = "Oups ! not updated"
      render :edit
    end
  end

  def unlink
    # raise note_params.inspect
    note = Note.find_by(id: params[:id])
    if note.update_attribute(:user_id, nil)
      flash[:success] = "Update success"
      redirect_to notes_path
    else
      flash[:error] = "Oups ! not updated"
      render :edit
    end
  end

  def destroy
    note = current_user.notes.find_by(id: params[:id])
    if note.destroy
      flash[:success] = "Delete success"
    else
      flash[:error] = "Oups ! not deleted"
    end
    redirect_to notes_path
  end

  private

  def note_params
    params.require(:note).permit(:title, :content)
  end
end