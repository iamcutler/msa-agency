ActiveAdmin.register Client do
    menu priority: 2

    index do
        id_column
        column :first_name
        column :last_name
        column :title
        column :email
        column :phone
        column :slug
        actions
    end

    show title: 'Client' do
        attributes_table do
            row :first_name
            row :last_name
            row :title
            row :email
            row :phone
            row :biography
            row :website_link
            row :facebook_link
            row :twitter_link
            row :instagram_link
            row :youtube_link
            row :slug
            row :location
        end
    end

    form do |f|
        inputs 'Details' do
            input :first_name
            input :last_name
            input :title
            input :email
            input :phone
            input :biography
            input :website_link, placeholder: 'http://www.mysite.com'
            input :facebook_link, placeholder: 'http://www.facebook.com'
            input :twitter_link, placeholder: 'http://www.twitter.com'
            input :instagram_link, placeholder: 'http://www.instagram.com'
            input :youtube_link, placeholder: 'http://www.youtube.com'
            input :slug
            input :location, as: :select, collection: ['Los Angeles', 'New York'], include_blank: false
        end

        actions
    end

    # Assign params that can be editable (Mass Assignment)
    permit_params :first_name, :last_name, :title, :email, :phone, :biography, :website_link, :facebook_link, :twitter_link, :instagram_link, :youtube_link, :slug, :location
end
