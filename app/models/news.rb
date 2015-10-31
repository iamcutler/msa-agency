class News < ActiveRecord::Base
    def self.findPublishedArticles(offset = 0, limit = 20)
        where(published: true).limit(limit).offset(offset)
    end

    def self.findFeaturedArticles(offset = 0, limit = 20)
        where(featured: true).where(published: true).limit(limit).offset(offset)
    end
end
