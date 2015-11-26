module Apiv1
    class NewsController < ApplicationController
        # GET /news
        def index
            offset = params[:offset] || 0
            limit = params[:limit] || 20
            location = params[:location] || nil

            @articles = News.findPublishedArticles(location, offset, limit)
            @articleCount = News.count
            @articlePageCount = (@articleCount / limit.to_i).round + 1
        end

        # GET /news/:slug
        def show
            @article = News.find_by_slug(params[:id])
        end

        # GET /featured-news
        def featured
            offset = params[:offset] || 0
            limit = params[:limit] || 20
            location = params[:location] || nil

            @articles = News.findFeaturedArticles(location, offset, limit)
        end
    end
end
