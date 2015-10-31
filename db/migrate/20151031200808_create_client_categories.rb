class CreateClientCategories < ActiveRecord::Migration
  def change
    create_table :client_categories do |t|
      t.belongs_to :client, index: true, foreign_key: true
      t.string :category, null: false

      t.timestamps null: false
    end
  end
end
