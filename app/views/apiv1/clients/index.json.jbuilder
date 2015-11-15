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
    @clientDefault = client.photos.where(default: 1).first

    if @clientDefault
        json.default_image do
            json.id @clientDefault.id
            json.caption @clientDefault.caption
            json.sizes do
                json.thumb @clientDefault.image.url(:thumb)
                json.square @clientDefault.image.url(:square)
                json.medium @clientDefault.image.url(:medium)
                json.large @clientDefault.image.url(:large)
            end
        end
    else
        json.default_image Hash.new
    end
end
