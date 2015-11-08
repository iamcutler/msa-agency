class AddAttachmentImageToStaffs < ActiveRecord::Migration
  def self.up
    change_table :staffs do |t|
      t.attachment :image, after: :department
    end
  end

  def self.down
    remove_attachment :staffs, :image
  end
end
