class StaffPhoto < ActiveRecord::Base
  before_validation :set_cover_photo
  before_validation :set_default_photo

  belongs_to :staff

  # This method associates the attribute ":image" with a file attachment
  has_attached_file :image, styles: {
      thumb: '300x300>',
      square: '400x400#',
      medium: '600x600>',
      large: '800x800>'
  },
  default_url: '/assets/images/img-placeholder.jpg'

  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_presence :image
  validates_attachment_size :image, :less_than => 5.megabytes
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  # Set cover boolean to false on all records
  def set_cover_photo
      if self.cover?
          StaffPhoto.where(staff_id: self.staff_id).update_all(cover: false)
          # Update client record
          Staff.update(self.staff_id, default_image_id: self.id)
      end
  end

  # Set default boolean to false on all records
  def set_default_photo
      if self.default?
          StaffPhoto.where(staff_id: self.staff_id).update_all(default: false)
          # Update client record
          Staff.update(self.staff_id, cover_image_id: self.id)
      end
  end
end
