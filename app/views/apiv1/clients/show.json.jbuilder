json.id @client.id
json.first_name @client.first_name
json.last_name @client.last_name
json.full_name @client.first_name + ' ' + @client.last_name
json.title @client.title
json.biography @client.biography
json.slug @client.slug
json.location @client.location
json.la_casting @client.la_casting
json.la_casting_url @client.la_casting_url

json.social do
    json.website @client.website_link
    json.facebook @client.facebook_link
    json.twitter @client.twitter_link
    json.instagram @client.instagram_link
    json.youtube @client.youtube_link
end

json.resume do
    json.commercials do
        json.array! @client.resume.where(job_type: 'commerical'), :id, :company, :credit, :project
    end

    json.events do
        json.array! @client.resume.where(job_type: 'event'), :id, :company, :credit, :project
    end

    json.music_videos do
        json.array! @client.resume.where(job_type: 'music video'), :id, :company, :credit, :project
    end

    json.television do
        json.array! @client.resume.where(job_type: 'television'), :id, :company, :credit, :project
    end

    json.award_shows do
        json.array! @client.resume.where(job_type: 'award show'), :id, :company, :credit, :project
    end

    json.film do
        json.array! @client.resume.where(job_type: 'film'), :id, :company, :credit, :project
    end

    json.corporate do
        json.array! @client.resume.where(job_type: 'corporate'), :id, :company, :credit, :project
    end

    json.miscellaneous do
        json.array! @client.resume.where(job_type: 'misc'), :id, :company, :credit, :project
    end

    json.awards do
        json.array! @client.resume.where(job_type: 'award'), :id, :company, :credit, :project
    end
end

# Cover client image
json.cover_image do
    json.id @client.cover_photo ? @client.cover_photo.id : ''
    json.caption @client.cover_photo ? @client.cover_photo.caption : ''
    json.sizes do
        json.thumb @client.cover_photo ? @client.cover_photo.image.url(:thumb) : '/assets/images/img-placeholder.jpg'
        json.square @client.cover_photo ? @client.cover_photo.image.url(:square) : '/assets/images/img-placeholder.jpg'
        json.medium @client.cover_photo ? @client.cover_photo.image.url(:medium) : '/assets/images/img-placeholder.jpg'
        json.large @client.cover_photo ? @client.cover_photo.image.url(:large) : '/assets/images/img-placeholder.jpg'
    end
end

# Default client image
json.default_image do
    json.id @client.default_photo ? @client.default_photo.id : ''
    json.caption @client.default_photo ? @client.default_photo.caption : ''
    json.sizes do
        json.thumb @client.default_photo ? @client.default_photo.image.url(:thumb) : '/assets/images/img-placeholder.jpg'
        json.square @client.default_photo ? @client.default_photo.image.url(:square) : '/assets/images/img-placeholder.jpg'
        json.medium @client.default_photo ? @client.default_photo.image.url(:medium) : '/assets/images/img-placeholder.jpg'
        json.large @client.default_photo ? @client.default_photo.image.url(:large) : '/assets/images/img-placeholder.jpg'
    end
end

json.images do
    json.array! @clientPhotos do |img|
        json.id img.id
        json.caption img.caption
        json.sizes do
            json.thumb img.image.url(:thumb)
            json.square img.image.url(:square)
            json.medium img.image.url(:medium)
            json.large img.image.url(:large)
        end
    end
end

json.videos do
    json.array! @clientVideos do |video|
        json.id video.id
        json.video_id video.video_id
        json.title video.title
        json.video_type video.video_type
        json.order video.order
    end
end

json.press do
    json.array! @clientPress do |press|
        json.id press.id
        json.caption press.caption
        json.sizes do
            json.thumb press.image.url(:thumb)
            json.medium press.image.url(:medium)
            json.large press.image.url(:large)
        end
    end
end
