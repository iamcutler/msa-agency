json.array! @affiliates do |affiliate|
    json.id affiliate.id
    json.name affiliate.name
    json.url affiliate.url
    json.description affiliate.description

    json.image do
        json.sizes do
            json.thumb affiliate.image.url(:thumb)
            json.square affiliate.image.url(:square)
            json.medium affiliate.image.url(:medium)
            json.large affiliate.image.url(:large)
        end
    end

    json.order affiliate.order
end
