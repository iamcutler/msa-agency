module Apiv1
    class NewsController < ApplicationController
        # GET /news
        def index
            offset = params[:offset] || 0
            limit = params[:limit] || 20

            @articles = News.all().limit(limit).offset(offset)
        end

        # GET/news/:slug
        def show
            @article = News.find_by_slug(params[:id])
        end
    end
end
