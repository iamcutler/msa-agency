module Apiv1
    class ClientsController < ApplicationController
        # GET /clients
        def index
            @clients = Client.all()
        end

        # GET /clients/slug
        def show
            @client = Client.find_by_slug(params[:id])
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
