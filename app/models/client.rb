class Client < ActiveRecord::Base
    has_many :resume, class_name: 'ClientResume', dependent: :destroy
    has_many :categories, class_name: 'ClientCategory', dependent: :destroy
    has_many :photos, class_name: 'ClientPhoto', dependent: :destroy
    has_one :default_photo, class_name: 'ClientPhoto', primary_key: 'default_image_id', foreign_key: "id"
    has_one :cover_photo, class_name: 'ClientPhoto', primary_key: 'cover_image_id', foreign_key: "id"
    has_many :press, class_name: 'ClientPress', dependent: :destroy

    accepts_nested_attributes_for :photos, allow_destroy: true
    accepts_nested_attributes_for :press, allow_destroy: true

    def name
        self.first_name + ' ' + self.last_name
    end
end
