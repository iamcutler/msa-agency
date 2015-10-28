Rails.application.routes.draw do

    scope '/api/v1', defaults: { format: 'json' } do
        resources :staffs, path: 'staff', only: ['index', 'show']

        scope '/social' do
            get 'twitter', to: 'social#getTwitterFeed'
        end
    end

    root 'static_pages#index'
    get "*path" => "static_pages#index"
end
