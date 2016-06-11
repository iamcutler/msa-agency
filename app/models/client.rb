class Client < ActiveRecord::Base
    scope :is_basic, -> (basic) { where basic: basic }
    scope :page_hidden, -> (hidden) { where page_hide: hidden }
    scope :search_hidden, -> (hidden) { where search_hide: hidden }

    has_many :resume, class_name: 'ClientResume', dependent: :destroy
    has_many :categories, class_name: 'ClientCategory', dependent: :destroy
    has_many :photos, class_name: 'ClientPhoto', dependent: :destroy
    has_one :reel, class_name: 'ClientReel', dependent: :destroy
    has_many :videos, class_name: 'ClientVideo', dependent: :destroy
    has_one :default_photo, class_name: 'ClientPhoto', primary_key: 'default_image_id', foreign_key: "id"
    has_one :cover_photo, class_name: 'ClientPhoto', primary_key: 'cover_image_id', foreign_key: "id"
    has_many :press, class_name: 'ClientPress', dependent: :destroy

    accepts_nested_attributes_for :photos, allow_destroy: true
    accepts_nested_attributes_for :reel, allow_destroy: true
    accepts_nested_attributes_for :videos, allow_destroy: true
    accepts_nested_attributes_for :press, allow_destroy: true
    accepts_nested_attributes_for :categories, allow_destroy: true

    def name
        self.first_name + ' ' + self.last_name
    end

    def self.search_by_name(name, page = 0, amount = 20)
        page = page.to_i
        page = if page > 0 then page - 1 else page end

        first_name_match = arel_table[:first_name].matches("%#{name.split(" ")[0].downcase}%")
        last_name_match = arel_table[:last_name].matches("%#{name.split(" ")[-1].downcase}%")

        where(first_name_match.or(last_name_match)).search_hidden(false).offset(page).limit(amount)
    end

    def resume_types
        ClientResume.select(:job_type, :order).distinct(:job_type).where(client_id: self.id).order(:order)
    end

    def save_resume_types(types = [])
        types.each_with_index do |t, i|
            self.resume.where(job_type: t).update_all(order: i + 1)
        end
    end
end
