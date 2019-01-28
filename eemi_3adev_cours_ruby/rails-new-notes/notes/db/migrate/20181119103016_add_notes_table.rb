class AddNotesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
    #notes : nom de la table
      t.string :title
      t.text :content

      t.timestamps
    end
  end
end
