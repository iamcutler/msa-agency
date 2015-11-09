module Apiv1
    class ClientsController < ApplicationController
        # GET /clients
        def index
            @clients = Client.all()
        end

        # GET /clients/slug
        def show
            @client = Client.find_by_slug(params[:id])

            if @client
                clientService = ClientService.new({ client: @client })

                @clientPhotos = @client.photos.order(:order)
                @clientPress = @client.press.order(:order)
                @clientDefaultPhoto = clientService.getDefaultPhoto || Hash.new
                @clientCoverPhoto = clientService.getCoverPhoto || Hash.new
            else
                render json: { error: 'Client not found' }, status: 404
            end
        end

        # GET /clients-by-category
        def find_by_categories
            begin
                categories = params[:categories]

                @clients = ClientCategory.findClients(categories)
            rescue
                @clients = []
            end
        end
    end
end
