class AddCoverImageIdToClient < ActiveRecord::Migration
  def change
    add_column :clients, :cover_image_id, :integer, after: 'default_image_id'
  end
end
