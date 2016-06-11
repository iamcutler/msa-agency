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
            row :la_casting
            row :la_casting_url
            row :slug
            row :location
        end
    end

    form do |f|
        inputs 'Details' do
            input :id, as: :hidden
            input :first_name
            input :last_name
            input :title
            input :email
            input :phone
            input :biography, as: :html_editor
            input :website_link, placeholder: 'http://www.mysite.com'
            input :facebook_link, placeholder: 'http://www.facebook.com'
            input :twitter_link, placeholder: 'http://www.twitter.com'
            input :instagram_link, placeholder: 'http://www.instagram.com'
            input :youtube_link, placeholder: 'http://www.youtube.com'
            input :basic, hint: 'This is used for department pages'
            input :la_casting, label: 'Show LA Casting Resume'
            input :la_casting_url
            input :slug
            input :page_hide, label: 'Hide from pages'
            input :search_hide, label: 'Hide from search'
            input :location, as: :select, collection: ['Los Angeles', 'New York'], include_blank: false
        end

        f.inputs 'Categories' do
            f.has_many :categories do |cat|
                if cat.object.persisted?
                    cat.input :_destroy, :as => :boolean
                end
                cat.input :category, as: :select, collection: [
                    ['Choreography', 'choreography'],
                    ['Stage Director', 'stage_director'],
                    ['Creative Director', 'creative_director'],
                    ['Music Director', 'music_director'],
                    ['Video Director', 'video_director'],
                    ['Director', 'director'],
                    ['Production', 'production'],
                    ['On Camera', 'on_camera'],
                    ['Dancer', 'dance'],
                    ['Kids & Teens', 'kids_teens'],
                    ['Specialty Act', 'specialty_act'],
                    ['Speaker', 'speaker'],
                    ['Designer', 'designer'],
                    ['Master Instructor', 'master_instructor'],
                    ['Instructor', 'instructor'],
                    ['So You Think You Can Dance', 'sytycd'],
                    ['Commercial', 'commercial'],
                    ['Musical Theatre', 'musical_theatre'],
                    ['Television/Film', 'television_film'],
                    ['Legacy', 'legacy']
                ], include_blank: false

                cat.actions
            end
        end

        f.inputs 'Photos' do
            f.has_many :photos do |ph|
                if ph.object.persisted?
                    ph.input :_destroy, :as => :boolean
                end
                ph.input :image, as: :file, hint: ph.object.image.present? ? image_tag(ph.object.image.url(:thumb)) : content_tag(:span, "no image uploaded yet")
                if ph.object.persisted?
                    ph.input :cover
                    ph.input :default
                end
                ph.input :caption
                ph.input :order, placeholder: '0'

                ph.actions
            end
        end

        f.inputs 'Reel', for: [:reel, f.object.reel || ClientReel.new] do |reel|
            reel.input :_destroy, :as => :boolean
            reel.input :video_id, placeholder: 'v?=uc-CzXQJg8Y'
            reel.input :title
            reel.input :video_type, as: :select, collection: [['YouTube', 'youtube'], ['Vimeo', 'vimeo']], include_blank: false

            reel.actions
        end

        f.inputs 'Videos' do
            f.has_many :videos do |pv|
                pv.input :_destroy, :as => :boolean
                pv.input :video_id, placeholder: 'v?=uc-CzXQJg8Y'
                pv.input :title
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

        panel 'Resume Order' do
            table_for client.resume_types, id: 'client-resume-ordering' do
              column "Type", :job_type, :job_type
            end
        end

        f.actions
    end

    # Assign params that can be editable (Mass Assignment)
    permit_params :first_name, :last_name, :title, :email, :phone, :biography, :website_link, :facebook_link,
                  :twitter_link, :instagram_link, :youtube_link, :basic, :la_casting, :la_casting_url, :slug,
                  :page_hide, :search_hide, :location,
                  photos_attributes: [:id, :image, :caption, :cover, :default, :order, :_destroy],
                  reel_attributes: [:id, :video_id, :title, :video_type, :_destroy],
                  videos_attributes: [:id, :video_id, :title, :video_type, :order, :_destroy],
                  press_attributes: [:id, :image, :caption, :order, :_destroy],
                  categories_attributes: [:id, :category, :_destroy]
end
