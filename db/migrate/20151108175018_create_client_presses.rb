class CreateClientPresses < ActiveRecord::Migration
  def change
    create_table :client_presses do |t|
      t.belongs_to :client, index: true, foreign_key: true
      t.attachment :image
      t.string :caption
      t.integer :order, default: 0, null: false

      t.timestamps null: false
    end
  end
end
