class AddLaCastingAndLaCastingUrlToClient < ActiveRecord::Migration
  def change
    add_column :clients, :la_casting, :boolean, after: :youtube_link, null: false, default: 0
    add_column :clients, :la_casting_url, :string, after: :la_casting
  end
end
