class CreateClientPhotos < ActiveRecord::Migration
  def change
    create_table :client_photos do |t|
      t.belongs_to :client, index: true, foreign_key: true
      t.attachment :image
      t.text :caption
      t.integer :order

      t.timestamps null: false
    end
  end
end
