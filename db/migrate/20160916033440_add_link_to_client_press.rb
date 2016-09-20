class AddLinkToClientPress < ActiveRecord::Migration
  def change
    add_column :client_presses, :link, :string, null: false, after: :caption
  end
end
