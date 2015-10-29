class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.string :first_name, null: false
      t.string :last_name
      t.string :title
      t.string :email
      t.string :phone, limit: 18
      t.text :biography
      t.string :slug, null: false
      t.string :location, null: false, default: 'Los Angeles'

      t.timestamps null: false
    end
  end
end
