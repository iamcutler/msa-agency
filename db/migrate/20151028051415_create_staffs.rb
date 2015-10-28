class CreateStaffs < ActiveRecord::Migration
  def change
    create_table :staffs do |t|
      t.string :first_name, null: false
      t.string :last_name
      t.string :email, null: false
      t.string :position, null: false
      t.text :biography
      t.string :location, default: 'Los Angeles', null: false
      t.string :department
      t.string :gender, null: false, default: 'male'
      t.string :slug, null: false
      t.integer :order, default: 0, null: false

      t.timestamps null: false
    end
  end
end
