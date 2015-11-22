Rails.application.routes.draw do
    devise_for :admin_users, ActiveAdmin::Devise.config
    ActiveAdmin.routes(self)

    scope '/api/v1', module: 'apiv1', as: 'apiv1', defaults: { format: 'json' } do
        resources :staffs, path: 'staff', only: ['index', 'show']

        resources :clients, only: ['index', 'show']
        get 'clients-by-category', to: 'clients#find_by_categories'

        resources :affiliate, only: ['index', 'show'], path: 'affiliates'

        resources :faq, only: ['index', 'show'], path: 'faq'

        resources :news, only: ['index', 'show']
        get 'featured-news', to: 'news#featured'

        post 'newsletter', to: 'newsletter#create'

        get 'search', to: 'search#get_results'

        scope '/contact' do
            post 'form', to: 'contact#submit'
        end

        scope '/social' do
            get 'twitter', to: 'social#getTwitterFeed'
            get 'instagram', to: 'social#getInstagramFeed'
        end
    end

    root 'static_pages#index'
    get "*path" => "static_pages#index"
end
