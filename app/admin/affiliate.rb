ActiveAdmin.register Affiliate do
    menu priority: 6

    index do
        column :name
        column :url

        actions
    end

    show do
        attributes_table do
            row :id
            row :name
            row :url
            row :description
            row :order
        end
    end

    form do |f|
        inputs 'Details' do
            input :name
            input :url
            input :description
            input :image, as: :file, hint: f.object.image.present? ? image_tag(f.object.image.url(:thumb)) : content_tag(:span, "no image uploaded yet")
            input :order
        end

        actions
    end

    permit_params :name, :url, :description, :image, :order
end
