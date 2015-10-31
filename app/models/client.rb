class Client < ActiveRecord::Base
    has_many :resume, class_name: 'ClientResume', dependent: :destroy
    has_many :categories, class_name: 'ClientCategory', dependent: :destroy
end
