class CreatePageSlides < ActiveRecord::Migration
  def change
    create_table :page_slides do |t|
      t.attachment :image, null: false
      t.string :media_source
      t.integer :media_type
      t.string :caption
      t.string :section, null: false, default: 'home'
      t.integer :slide_type, null: false, default: 0
      t.integer :order, null: false, default: 1

      t.timestamps null: false
    end
  end
end
