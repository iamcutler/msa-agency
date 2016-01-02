class Apiv1::SearchController < ApplicationController
    # GET /search
    def get_results
        searchService = Services::Search.new(params[:q], params[:page], params[:limit])

        case params[:type]
            when "clients"
                @results = searchService.query_clients
                render file: "#{Rails.root}/app/views/apiv1/search/clients.json.jbuilder", formats: :json
            when "news"
                @results = searchService.query_news
                render file: "#{Rails.root}/app/views/apiv1/search/news.json.jbuilder", formats: :json
            else
                @results = searchService.query
                render file: "#{Rails.root}/app/views/apiv1/search/all.json.jbuilder", formats: :json
        end
    end
end
