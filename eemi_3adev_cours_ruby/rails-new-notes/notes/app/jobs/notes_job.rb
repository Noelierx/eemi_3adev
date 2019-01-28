class NotesJob < ApplicationJob
    
   # queue_as :notes

    def perform(note = nil)
        puts "coucou"
    end
end