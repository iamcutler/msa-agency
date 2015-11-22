class News < ActiveRecord::Base
    def self.findPublishedArticles(location = nil, offset = 0, limit = 20)
        where(published: true).where(location: [nil, '', location]).limit(limit).offset(offset)
    end

    def self.findFeaturedArticles(location = nil, offset = 0, limit = 20)
        where(featured: true).where(published: true).where(location: [nil, '', location]).limit(limit).offset(offset)
    end

    def self.search_by_name(name, page = 0, amount = 20)
        query = "%#{name.downcase}%"
        subject_match = arel_table[:subject].matches(query)
        body_match = arel_table[:body].matches(query)

        where(subject_match.or(body_match)).where(published: true).offset(page).limit(amount)
    end
end
