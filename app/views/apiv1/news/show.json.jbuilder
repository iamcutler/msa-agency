if @article
    json.id @article.id
    json.subject @article.subject
    json.body @article.body
    json.location @article.location
    json.featured @article.featured

    json.image do
        json.thumb @article.image ? @article.image.url(:thumb) : '/assets/images/img-placeholder.jpg'
        json.square @article.image ? @article.image.url(:square) : '/assets/images/img-placeholder.jpg'
        json.medium @article.image ? @article.image.url(:medium) : '/assets/images/img-placeholder.jpg'
        json.large @article.image ? @article.image.url(:large) : '/assets/images/img-placeholder.jpg'
    end

    json.slug @article.slug
    json.published @article.slug
    json.created_at @article.created_at
end
