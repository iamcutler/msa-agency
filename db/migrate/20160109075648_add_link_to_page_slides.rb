class AddLinkToPageSlides < ActiveRecord::Migration
  def change
    add_column :page_slides, :link, :string, after: :caption
    add_column :page_slides, :link_target, :integer, default: 0, after: :link
  end
end
