class CreateClientSocialStats < ActiveRecord::Migration
  def change
    create_table :client_social_stats do |t|
      t.belongs_to :client, index: true, foreign_key: true
      t.integer :twitter, null: false, default: 0
      t.integer :instagram, null: false, default: 0
      t.integer :youtube, null: false, default: 0

      t.timestamps null: false
    end
  end
end
