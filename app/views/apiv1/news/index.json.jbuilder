json.pagination do
    json.count @articleCount
    json.pages @articlePageCount
end

json.data do
    json.array! @articles do |article|
        json.id article.id
        json.subject article.subject
        json.body article.body
        json.location article.location
        json.featured article.featured
        json.slug article.slug
        json.published article.slug
        json.created_at article.created_at
    end
end
