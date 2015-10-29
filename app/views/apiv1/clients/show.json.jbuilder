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
