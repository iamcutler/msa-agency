class AddHiddenToClient < ActiveRecord::Migration
  def change
    add_column :clients, :search_hide, :boolean, null: false, default: 0, after: :slug
    add_column :clients, :page_hide, :boolean, null: false, default: 0, after: :search_hide
  end
end
