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
end
