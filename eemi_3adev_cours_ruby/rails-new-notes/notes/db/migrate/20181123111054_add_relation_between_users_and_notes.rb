class AddRelationBetweenUsersAndNotes < ActiveRecord::Migration[5.2]
  def change
    #Crée une relation entre les 2 tables
    add_reference :notes, :user, index: true
  end
end
