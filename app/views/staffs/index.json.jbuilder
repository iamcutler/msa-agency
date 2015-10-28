json.array! @staff do |staff|
    json.first_name staff.first_name
    json.last_name staff.last_name
    json.name staff.first_name + ' ' + staff.last_name
    json.email staff.email
    json.position staff.position
    json.biography staff.biography
    json.location staff.location
    json.department staff.department
    json.gender staff.gender
    json.slug staff.slug
    json.order staff.order
end
