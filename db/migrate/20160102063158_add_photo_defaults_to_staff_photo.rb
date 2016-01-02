class AddPhotoDefaultsToStaffPhoto < ActiveRecord::Migration
  def change
      add_column :staff_photos, :cover, :boolean, after: :caption, null: false, default: 0, unique: true
      add_column :staff_photos, :default, :boolean, after: :cover, null: false, default: 0, unique: true
  end
end
