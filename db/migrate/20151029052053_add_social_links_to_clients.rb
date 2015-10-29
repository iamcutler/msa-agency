class AddSocialLinksToClients < ActiveRecord::Migration
  def change
      add_column :clients, :website_link, :string, after: :biography
      add_column :clients, :facebook_link, :string, after: :website_link
      add_column :clients, :twitter_link, :string, after: :facebook_link
      add_column :clients, :instagram_link, :string, after: :twitter_link
      add_column :clients, :youtube_link, :string, after: :instagram_link
  end
end
