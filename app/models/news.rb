class News < ActiveRecord::Base
    def self.findPublishedArticles(location = nil, offset = 0, limit = 20)
        where(published: true).where(location: [nil, '', location]).limit(limit).offset(offset)
    end

    def self.findFeaturedArticles(location = nil, offset = 0, limit = 20)
        where(featured: true).where(published: true).where(location: [nil, '', location]).limit(limit).offset(offset)
    end
end
