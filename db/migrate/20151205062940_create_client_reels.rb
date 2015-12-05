class CreateClientReels < ActiveRecord::Migration
  def change
    create_table :client_reels do |t|
      t.belongs_to :client, index: true, foreign_key: true
      t.string :video_id, null: false
      t.string :title
      t.integer :video_type, null: false, default: 0

      t.timestamps null: false
    end
  end
end
