class AddTitleToClientVideo < ActiveRecord::Migration
  def change
    add_column :client_videos, :title, :string, after: :video_id
  end
end
