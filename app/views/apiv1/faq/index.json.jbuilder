json.array! @faqs do |faq|
    json.id faq.id
    json.question faq.question
    json.answer faq.answer
    json.order faq.order
end
