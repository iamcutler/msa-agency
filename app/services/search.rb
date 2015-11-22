module Services
    class Search
        def initialize(keywords, page, limit)
            @keywords = keywords
            @page = page || 0
            @limit = limit || 20
        end

        def query
            hash = Hash.new

            hash[:clients] = Client.search_by_name(@keywords, @page, @limit)
            hash[:news] = News.search_by_name(@keywords, @page, @limit)

            hash
        end

        def query_clients
            Client.search_by_name(@keywords, @page, @limit)
        end

        def query_news
            News.search_by_name(@keywords, @page, @limit)
        end
    end
end
