class AddThumbnailToClientVideo < ActiveRecord::Migration
  def change
    add_column :client_videos, :thumbnail, :string, after: :title
  end
end
