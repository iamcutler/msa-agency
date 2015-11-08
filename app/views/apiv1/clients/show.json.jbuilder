json.id @client.id
json.first_name @client.first_name
json.last_name @client.last_name
json.full_name @client.first_name + ' ' + @client.last_name
json.title @client.title
json.biography @client.biography
json.slug @client.slug
json.location @client.location

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

json.images do
    json.array! @client.photos do |img|
        json.id img.id
        json.caption img.caption
        json.sizes do
            json.thumb img.image.url(:thumb)
            json.medium img.image.url(:medium)
            json.large img.image.url(:large)
        end
    end
end
