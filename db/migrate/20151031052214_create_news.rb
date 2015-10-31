class CreateNews < ActiveRecord::Migration
  def change
    create_table :news do |t|
      t.string :subject, null: false, limit: 512
      t.text :body, null: false
      t.string :location
      t.boolean :featured, null: false, default: 1
      t.string :slug, null: false
      t.boolean :published, null: false, default: 1

      t.timestamps null: false
    end
  end
end
