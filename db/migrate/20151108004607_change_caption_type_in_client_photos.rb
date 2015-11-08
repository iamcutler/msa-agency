class ChangeCaptionTypeInClientPhotos < ActiveRecord::Migration
  def change
      change_column :client_photos, :caption, :string
  end
end
