json.array! @clients do |client|
    json.id client.id
    json.first_name client.first_name
    json.last_name client.last_name
    json.full_name client.first_name + ' ' + client.last_name
    json.title client.title
    json.biography client.biography
    json.slug client.slug
    json.location client.location
    json.categories CSV.parse(client.categories)[0].map { |a| a.squish }

    json.default_image do
        # Default client image
        @clientDefault = ClientPhoto.where(client_id: client.id, default: 1).first

        if @clientDefault
            json.id @clientDefault.id
            json.caption @clientDefault.caption
            json.sizes do
                json.thumb @clientDefault.image.url(:thumb)
                json.square @clientDefault.image.url(:square)
                json.medium @clientDefault.image.url(:medium)
                json.large @clientDefault.image.url(:large)
            end
        else
            json.caption ''
            json.sizes do
                json.thumb '/assets/images/img-placeholder.jpg'
                json.square '/assets/images/img-placeholder.jpg'
                json.medium '/assets/images/img-placeholder.jpg'
                json.large '/assets/images/img-placeholder.jpg'
            end
        end
    end

    json.social do
        json.stats do
            @socialStats = ClientSocialStat.where(client_id: client.id).first

            json.twitter @socialStats ? @socialStats.twitter : 0
            json.instagram @socialStats ? @socialStats.instagram : 0
            json.youtube @socialStats ? @socialStats.youtube : 0
        end
    end
end
