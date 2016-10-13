ActiveAdmin.register SocialMediaVideo do
    menu priority: 8, label: 'Social Media'

    index do
        column :title
        column :video_type
        column :order

        actions
    end

    form do |f|
        inputs 'Video' do
            input :title
            input :video_id, placeholder: 'v?=uc-CzXQJg8Y'
            input :video_type, as: :select, collection: [['YouTube', 'youtube'], ['Vimeo', 'vimeo']], include_blank: false
            input :order, placeholder: '0'
        end

        actions
    end

    permit_params :title, :video_id, :video_type, :order
end
