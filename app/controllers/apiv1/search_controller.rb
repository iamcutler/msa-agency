class Apiv1::SearchController < ApplicationController
    # GET /search
    def get_results
        searchService = Services::Search.new(params[:q], params[:page], params[:limit])

        case params[:type]
            when "clients"
                @results = searchService.query_clients
            when "news"
                @results = searchService.query_news
            else
                @results = searchService.query
        end

        render json: @results
    end
end
