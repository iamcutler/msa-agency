class AddImageToNews < ActiveRecord::Migration
  def change
    add_column :news, :image_file_name, :string, after: :featured
    add_column :news, :image_content_type, :string, after: :image_file_name
    add_column :news, :image_file_size, :integer, after: :image_content_type
    add_column :news, :image_updated_at, :datetime, after: :image_file_size
  end
end
