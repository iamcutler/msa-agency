class CreateStaffVideos < ActiveRecord::Migration
  def change
    create_table :staff_videos do |t|
      t.belongs_to :staff, index: true, foreign_key: true
      t.string :video_id, null: false
      t.string :title
      t.integer :video_type, null: false, default: 0
      t.integer :order, null: false, default: 0

      t.timestamps null: false
    end
  end
end
