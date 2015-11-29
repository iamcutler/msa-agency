class Staff < ActiveRecord::Base
    has_many :photos, class_name: 'StaffPhoto', dependent: :destroy
    has_many :videos, class_name: 'StaffVideo', dependent: :destroy
    has_one :default_photo, class_name: 'StaffPhoto', primary_key: 'default_image_id', foreign_key: "id"
    has_one :cover_photo, class_name: 'StaffPhoto', primary_key: 'cover_image_id', foreign_key: "id"

    accepts_nested_attributes_for :photos, allow_destroy: true
    accepts_nested_attributes_for :videos, allow_destroy: true
end
