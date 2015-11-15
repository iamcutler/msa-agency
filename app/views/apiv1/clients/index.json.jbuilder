json.array! @clients do |client|
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
