class AddHtmlContentToNotes < ActiveRecord::Migration[5.2]
  def change
    add_column :notes, :html_content, :text
  end
end
