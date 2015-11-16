class AddDefaultImageIdAndCoverImageIdToStaff < ActiveRecord::Migration
  def change
    add_column :staffs, :default_image_id, :integer, after: 'image_file_name'
    add_column :staffs, :cover_image_id, :integer, after: 'default_image_id'
  end
end
