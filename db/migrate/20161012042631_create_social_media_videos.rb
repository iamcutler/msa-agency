class CreateSocialMediaVideos < ActiveRecord::Migration
  def change
    create_table :social_media_videos do |t|
      t.string :video_id, null: false
      t.string :title, null: false
      t.string :thumbnail
      t.integer :video_type, null: false, default: 0
      t.integer :order, null: false, default: 0

      t.timestamps null: false
    end
  end
end
