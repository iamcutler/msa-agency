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
    end
end
