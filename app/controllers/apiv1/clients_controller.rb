module Apiv1
    class ClientsController < ApplicationController
        # GET /clients
        def index
            @clients = Client.all.is_basic(false).page_hidden(false).order(:first_name)
        end

        # GET /clients/slug
        def show
            @client = Client.find_by_slug(params[:id])

            if @client
                @clientPhotos = @client.photos.order(:order)
                @clientReel = @client.reel
                @clientVideos = @client.videos.order(:order)
                @clientPress = @client.press.order(:order)
                @resumeOrder = @client.get_resume_types

                begin
                    # Add vimeo thumbnail if available
                    @clientVideos.each do |v|
                        if v.video_type == "vimeo"
                            video = Vimeo::Simple::Video.info(v.video_id)

                            Rails.logger.info video[0]
                            if video
                                v[:thumbnail] = video[0]['thumbnail_large'];
                            end
                        end
                    end
                rescue e
                    Rails.logger.error "Error getting vimeos for client: #{@client}"
                end
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

        # POST /clients/:id/sort
        def sort_resume_categories
            client_id = params[:id]
            categories = params[:categories]

            begin
                if client_id && categories
                    client = Client.find(client_id)

                    if client
                        # Save resume types for client
                        client.save_resume_types(categories)

                        return render json: { success: true }
                    end
                end

                render json: { success: false }
            rescue StandardError => e
                Rails.logger.error e
                render json: { success: false }
            end
        end
    end
end
