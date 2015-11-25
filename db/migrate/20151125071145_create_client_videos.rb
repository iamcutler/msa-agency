class CreateClientVideos < ActiveRecord::Migration
  def change
    create_table :client_videos do |t|
      t.belongs_to :client, index: true, foreign_key: true
      t.string :video_id, null: false
      t.integer :video_type, null: false, default: 0
      t.integer :order, null: false, default: 0

      t.timestamps null: false
    end
  end
end
