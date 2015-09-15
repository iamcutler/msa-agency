Rails.application.routes.draw do

    scope '/api/v1' do
        scope '/social' do
            get 'twitter', to: 'social#getTwitterFeed'
        end
    end

    root 'static_pages#index'
end
