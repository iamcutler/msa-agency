json.first_name @staff.first_name
json.last_name @staff.last_name
json.full_name @staff.first_name + ' ' + @staff.last_name
json.email @staff.email
json.title @staff.position
json.biography @staff.biography
json.location @staff.location
json.department @staff.department

# Default staff image
json.default_image do
    json.id @staff.default_photo ? @staff.default_photo.id : 0
    json.caption @staff.default_photo ? @staff.default_photo.caption : ''
    json.sizes do
        json.thumb @staff.default_photo ? @staff.default_photo.image.url(:thumb) : '/assets/images/img-placeholder.jpg'
        json.square @staff.default_photo ? @staff.default_photo.image.url(:square) : '/assets/images/img-placeholder.jpg'
        json.medium @staff.default_photo ? @staff.default_photo.image.url(:medium) : '/assets/images/img-placeholder.jpg'
        json.large @staff.default_photo ? @staff.default_photo.image.url(:large) : '/assets/images/img-placeholder.jpg'
    end
end

# Cover staff image
json.cover_image do
    json.id @staff.cover_photo ? @staff.cover_photo.id : 0
    json.caption @staff.cover_photo ? @staff.cover_photo.caption : ''
    json.sizes do
        json.thumb @staff.cover_photo ? @staff.cover_photo.image.url(:thumb) : '/assets/images/img-placeholder.jpg'
        json.square @staff.cover_photo ? @staff.cover_photo.image.url(:square) : '/assets/images/img-placeholder.jpg'
        json.medium @staff.cover_photo ? @staff.cover_photo.image.url(:medium) : '/assets/images/img-placeholder.jpg'
        json.large @staff.cover_photo ? @staff.cover_photo.image.url(:large) : '/assets/images/img-placeholder.jpg'
    end
end

json.images do
    json.array! @staff.photos.order(:order) do |img|
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
    json.array! @staff.videos.order(:order) do |video|
        json.id video.id
        json.video_id video.video_id
        json.title video.title
        json.video_type video.video_type
        json.order video.order
    end
end

json.gender @staff.gender
json.slug @staff.slug
json.order @staff.order
