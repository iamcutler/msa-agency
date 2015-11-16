class RemoveImageFromStaff < ActiveRecord::Migration
  def change
    remove_column :staffs, :image_file_name
    remove_column :staffs, :image_content_type
    remove_column :staffs, :image_file_size
    remove_column :staffs, :image_updated_at
  end
end
