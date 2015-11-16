json.array! @staff do |staff|
    json.first_name staff.first_name
    json.last_name staff.last_name
    json.full_name staff.first_name + ' ' + staff.last_name
    json.email staff.email
    json.title staff.position
    json.biography staff.biography
    json.location staff.location
    json.department staff.department

    # Default staff image
    json.default_image do
        json.id staff.default_photo ? staff.default_photo.id : 0
        json.caption staff.default_photo ? staff.default_photo.caption : ''
        json.sizes do
            json.thumb staff.default_photo ? staff.default_photo.image.url(:thumb) : '/assets/images/img-placeholder.jpg'
            json.square staff.default_photo ? staff.default_photo.image.url(:square) : '/assets/images/img-placeholder.jpg'
            json.medium staff.default_photo ? staff.default_photo.image.url(:medium) : '/assets/images/img-placeholder.jpg'
            json.large staff.default_photo ? staff.default_photo.image.url(:large) : '/assets/images/img-placeholder.jpg'
        end
    end

    json.gender staff.gender
    json.slug staff.slug
    json.order staff.order
end
