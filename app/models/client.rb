class Client < ActiveRecord::Base
    has_many :resume, class_name: 'ClientResume', dependent: :destroy
    has_many :categories, class_name: 'ClientCategory', dependent: :destroy
    has_many :photos, class_name: 'ClientPhoto', dependent: :destroy
    has_many :press, class_name: 'ClientPress', dependent: :destroy

    accepts_nested_attributes_for :photos, allow_destroy: true

    def name
        self.first_name + ' ' + self.last_name
    end
end
