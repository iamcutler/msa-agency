json.clients do
    json.array! @results[:clients] do |client|
        json.id client.id
        json.first_name client.first_name
        json.last_name client.last_name
        json.full_name client.first_name + ' ' + client.last_name
        json.title client.title
        json.biography client.biography
        json.slug client.slug
        json.location client.location

        # Default client image
        json.default_image do
            json.id client.default_photo ? client.default_photo.id : 0
            json.caption client.default_photo ? client.default_photo.caption : ''
            json.sizes do
                json.thumb client.default_photo ? client.default_photo.image.url(:thumb) : '/assets/images/img-placeholder.jpg'
                json.square client.default_photo ? client.default_photo.image.url(:square) : '/assets/images/img-placeholder.jpg'
                json.medium client.default_photo ? client.default_photo.image.url(:medium) : '/assets/images/img-placeholder.jpg'
                json.large client.default_photo ? client.default_photo.image.url(:large) : '/assets/images/img-placeholder.jpg'
            end
        end
    end
end

json.news do
    json.array! @results[:news] do |article|
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
