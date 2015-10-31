class CreateNewsletters < ActiveRecord::Migration
  def change
    create_table :newsletters do |t|
      t.string :email_address, null: false, unique: true

      t.timestamps null: false
    end
  end
end
