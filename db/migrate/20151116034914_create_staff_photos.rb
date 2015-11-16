class CreateStaffPhotos < ActiveRecord::Migration
  def change
    create_table :staff_photos do |t|
      t.belongs_to :staff, index: true, foreign_key: true
      t.attachment :image
      t.string :caption
      t.integer :order, null: false, default: 0

      t.timestamps null: false
    end
  end
end
