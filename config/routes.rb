Rails.application.routes.draw do
    devise_for :admin_users, ActiveAdmin::Devise.config
    ActiveAdmin.routes(self)

    get 'clients/resume/:slug', to: 'apiv1/clients#resume_generation'

    scope '/api/v1', module: 'apiv1', as: 'apiv1', defaults: { format: 'json' } do
        get 'company', to: 'company#index'

        resources :staffs, path: 'staff', only: ['index', 'show']

        resources :clients, only: ['index', 'show']
        get 'clients-by-category', to: 'clients#find_by_categories'
        post 'client-resume/:id/sort', to: 'clients#sort_resume_categories'
        post 'client-resume/:id/sort-records', to: 'clients#sort_resume_records'

        resources :affiliate, only: ['index', 'show'], path: 'affiliates'

        resources :faq, only: ['index', 'show'], path: 'faq'

        resources :news, only: ['index', 'show']
        get 'featured-news', to: 'news#featured'

        post 'newsletter', to: 'newsletter#create'

        get 'search', to: 'search#get_results'

        get 'page-slides', to: 'page_slide#index'

        # Uploads
        scope 'storage' do
            post 'upload', to: 'file_upload#upload_file_to_s3'
        end

        scope '/contact' do
            post 'form', to: 'contact#submit'
            post 'representation', to: 'contact#representation'
            post 'booking', to: 'contact#booking'
        end

        scope '/social' do
            get 'twitter', to: 'social#getTwitterFeed'
            get 'instagram', to: 'social#getInstagramFeed'
            get 'videos', to: 'social#getSocialVideos'
        end
    end

    root to: 'static_pages#index'
    get "*path" => "static_pages#index", constraints: lambda { |request|
        request.path =~ /^(?!\/admin)^(?!\/images)/
    }
end
