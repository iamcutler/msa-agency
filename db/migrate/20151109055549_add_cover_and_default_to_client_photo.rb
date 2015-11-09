class AddCoverAndDefaultToClientPhoto < ActiveRecord::Migration
  def change
    add_column :client_photos, :cover, :boolean, after: :image_updated_at, null: false, default: 0, unique: true
    add_column :client_photos, :default, :boolean, after: :cover, null: false, default: 0, unique: true
  end
end
