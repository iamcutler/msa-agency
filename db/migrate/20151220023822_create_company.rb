class CreateCompany < ActiveRecord::Migration
  def change
    create_table :company do |t|
      t.string :reel_id
      t.integer :reel_type

      t.timestamps null: false
    end
  end
end
