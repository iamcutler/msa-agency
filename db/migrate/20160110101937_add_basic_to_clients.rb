class AddBasicToClients < ActiveRecord::Migration
  def change
    add_column :clients, :basic, :boolean, null: false, default: 0, after: :youtube_link
  end
end
