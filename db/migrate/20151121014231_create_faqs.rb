class CreateFaqs < ActiveRecord::Migration
  def change
    create_table :faqs do |t|
      t.text :question, null: false
      t.text :answer, null: false
      t.integer :order, null: false, default: 0

      t.timestamps null: false
    end
  end
end
