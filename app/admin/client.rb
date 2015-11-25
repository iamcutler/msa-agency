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

        f.inputs 'Photos' do
            f.has_many :photos do |ph|
                ph.input :_destroy, :as => :boolean
                ph.input :image, as: :file, hint: ph.object.image.present? ? image_tag(ph.object.image.url(:thumb)) : content_tag(:span, "no image uploaded yet")
                ph.input :cover
                ph.input :default
                ph.input :caption
                ph.input :order, placeholder: '0'

                ph.actions
            end
        end

        f.inputs 'Videos' do
            f.has_many :videos do |pv|
                pv.input :_destroy, :as => :boolean
                pv.input :video_id, placeholder: 'v?=uc-CzXQJg8Y'
                pv.input :video_type, as: :select, collection: [['YouTube', 'youtube'], ['Vimeo', 'vimeo']], include_blank: false
                pv.input :order, placeholder: '0'

                pv.actions
            end
        end

        f.inputs 'Press' do
            f.has_many :press do |pr|
                pr.input :_destroy, :as => :boolean
                pr.input :image, as: :file, hint: pr.object.image.present? ? image_tag(pr.object.image.url(:thumb)) : content_tag(:span, "no image uploaded yet")
                pr.input :caption
                pr.input :order, placeholder: '0'

                pr.actions
            end
        end

        f.actions
    end

    # Assign params that can be editable (Mass Assignment)
    permit_params :first_name, :last_name, :title, :email, :phone, :biography, :website_link, :facebook_link,
                  :twitter_link, :instagram_link, :youtube_link, :slug, :location,
                  photos_attributes: [:id, :image, :caption, :cover, :default, :order, :_destroy],
                  videos_attributes: [:id, :video_id, :video_type, :order, :_destroy],
                  press_attributes: [:id, :image, :caption, :order, :_destroy]
end
