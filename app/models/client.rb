class Client < ActiveRecord::Base
    has_many :resume, class_name: 'ClientResume', dependent: :destroy
    has_many :categories, class_name: 'ClientCategory', dependent: :destroy
    has_many :photos, class_name: 'ClientPhoto', dependent: :destroy

    def name
        self.first_name + ' ' + self.last_name
    end
end
