json.data do
    json.array! @results do |article|
        json.id article.id
        json.subject article.subject
        json.body article.body
        json.location article.location
        json.featured article.featured

        json.image do
            json.thumb article.image.url(:thumb)
            json.square article.image.url(:square)
            json.medium article.image.url(:medium)
            json.large article.image.url(:large)
        end

        json.slug article.slug
        json.published article.slug
        json.created_at article.created_at
    end
end
