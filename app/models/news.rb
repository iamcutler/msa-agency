class News < ActiveRecord::Base
    def self.findPublishedArticles(offset = 0, limit = 20)
        where(published: true).limit(limit).offset(offset)
    end
end
