class News < ActiveRecord::Base
    # This method associates the attribute ":image" with a file attachment
    has_attached_file :image, styles: {
        thumb: '300x300>',
        square: '400x400#',
        medium: '600x600>',
        large: '800x800>'
    },
    default_url: '/assets/images/msa-placeholder.jpg'

    # Validate the attached image is image/jpg, image/png, etc
    validates_attachment_presence :image
    validates_attachment_size :image, :less_than => 5.megabytes
    validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

    validates_uniqueness_of :slug

    def self.findPublishedArticles(location = nil, offset = 0, limit = 20)
        where(published: true).where(location: [nil, '', location]).limit(limit).offset(offset)
    end

    def self.findFeaturedArticles(location = nil, offset = 0, limit = 20)
        where(featured: true).where(published: true).where(location: [nil, '', location]).limit(limit).offset(offset)
    end

    def self.search_by_name(name, page = 0, amount = 20)
        page = page.to_i
        page = if page > 0 then page - 1 else page end

        query = "%#{name.downcase}%"
        subject_match = arel_table[:subject].matches(query)
        body_match = arel_table[:body].matches(query)

        where(subject_match.or(body_match)).where(published: true).order(created_at: :desc).offset(page).limit(amount)
    end
end
