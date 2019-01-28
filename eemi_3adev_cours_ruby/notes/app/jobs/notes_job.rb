class NotesJob < ApplicationJob
  queue_as :notes

  def perform(note=nil)
    note.to_markdown
  end
end
