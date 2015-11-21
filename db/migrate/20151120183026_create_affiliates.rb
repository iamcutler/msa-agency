class CreateAffiliates < ActiveRecord::Migration
  def change
    create_table :affiliates do |t|
      t.string :name, null: false
      t.string :url
      t.text :description
      t.attachment :image
      t.integer :order, null: false, default: 0

      t.timestamps null: false
    end
  end
end
