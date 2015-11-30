ActiveAdmin.register PageSlide do
    menu priority: 8

    index do
        column :slide_type
        column :media_type
        column :media_source
        column :section
        column :order
        actions
    end

    form do |f|
        inputs 'Details' do
            input :image, as: :file
            input :slide_type, as: :select, collection: [ :image, :video ], include_blank: false
            input :media_type, as: :select, collection: [ :youtube, :vimeo ]
            input :media_source, placeholder: 'v?=uc-CzXQJg8Y'
            input :caption
            input :section, as: :select, collection: [ 'home' ], include_blank: false
            input :order
        end

        f.actions
    end

    # Assign params that can be editable (Mass Assignment)
    permit_params :image, :slide_type, :media_type, :media_source, :caption, :section, :order
end
