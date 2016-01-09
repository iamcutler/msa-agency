module Apiv1
    class ClientsController < ApplicationController
        # GET /clients
        def index
            @clients = Client.all.order(:first_name)
        end

        # GET /clients/slug
        def show
            @client = Client.find_by_slug(params[:id])

            if @client
                @clientPhotos = @client.photos.order(:order)
                @clientReel = @client.reel
                @clientVideos = @client.videos.order(:order)
                @clientPress = @client.press.order(:order)
            else
                render json: { error: 'Client not found' }, status: 404
            end
        end

        # GET /clients-by-category
        def find_by_categories
            begin
                categories = params[:categories]

                @clients = ClientCategory.findClients(categories).order("clients.first_name ASC")
            rescue
                @clients = []
            end
        end
    end
end
