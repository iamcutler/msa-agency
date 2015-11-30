json.array! @slides do |slide|
    json.id slide.id

    json.sizes do
        json.thumb slide.image.url(:thumb)
        json.large slide.image.url(:large)
    end

    json.media_type slide.media_type
    json.media_source slide.media_source
    json.caption slide.caption
    json.section slide.section
    json.type slide.slide_type
    json.order slide.order
end
