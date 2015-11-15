class AddDefaultImageIdToClient < ActiveRecord::Migration
  def change
    add_column :clients, :default_image_id, :integer, after: :youtube_link
  end
end
