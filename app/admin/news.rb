ActiveAdmin.register News do
    menu priority: 4

    index do
        id_column
        column :subject
        column :body
        column :location
        column :featured
        column :published

        actions
    end

    show title: 'News Article' do
        attributes_table do
            row :subject
            row :body
            row :location
            row :featured
            row :slug
            row :published
            row :created_at
        end
    end

    form do |f|
        inputs 'Details' do
            input :subject
            input :body
            input :location, as: :select, collection: ['Los Angeles', 'New York', ['Los Angeles and New York', '']], include_blank: false
            input :featured
            input :slug
            input :published
        end

        actions
    end

    permit_params :subject, :body, :location, :featured, :slug, :published
end
